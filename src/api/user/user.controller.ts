import User from './user.model';
import BaseCtrl from './../base';
import Config from '../../config';
// import * as jwt from 'jsonwebtoken';
import * as async from 'async';
// import * as crypto from 'crypto';
// import * as _ from 'lodash';
// import * as mailer from '../sendmail/send';

// import * as helper from './../../components/helper';
import AuthService from './../../auth/auth.service';
import SmsService from './../../services/sms.service';
import EmailService from './../../services/email.service';
import CartService from './../../services/cart.service';

let auth = new AuthService();
let config = new Config();
let sms = new SmsService();
let emailService = new EmailService();
let cart = new CartService();

export default class UsersCtrl extends BaseCtrl {
    model = User;
    validationError = (res, statusCode?) => {
        statusCode = statusCode || 422;
        return function (err) {
            // console.log('ERR', err);
            if (err.errors && err.errors.email && err.errors.email.message) {
                err = err.errors.email;
            }
            console.log('ERR', err);
            // if (err.errors && err.errors.email && err.errors.email.message) {
            //     err = err.errors.email;
            // }
            return res.status(statusCode).json(err);
        };
    }
    handleError = (res, statusCode?) => {
        statusCode = statusCode || 500;
        return function (err) {
            return res.status(statusCode).send(err);
        };
    }

    hashPassword = (user, newPassword) => {
        return new Promise((resolve, reject) => {
            user.password = newPassword;
            user.makeSalt((saltErr, salt) => {
                if (saltErr) {
                    return reject(saltErr);
                }
                user.salt = salt;
                user.encryptPassword(user.password, (encryptErr, hashedPassword) => {
                    if (encryptErr) {
                        return reject(encryptErr);
                    }
                    user.password = hashedPassword;
                    return resolve(user);
                });
            })
        })
    }


    /*
    * Creates a new user
    */
    
    phoneSignUp = (req, res) => {
        const newUser: any = new User(req.body);
        const randomPass = AuthService.genPassCode();
        newUser.password = randomPass;
        newUser.role = 'User';

        newUser.save()
            .then(function (user) {
                // console.log('user', user);
                sms.sendSms(user.phoneNumber, 'Your Bazardesh account password is ' + randomPass)
                // var token = AuthService.signToken(user);

                // CREATE A CART FOR USER
                cart.createUserCart({items: []}, user._id);
                
                res
                .status(200)
                .json({message: 'Sign up successful. Check your phone inbox.'});
            })
            .catch(function (err) {
                if (err.errors && err.errors.phoneNumber && err.errors.phoneNumber.message) {
                    err = err.errors.phoneNumber.message;
                }
                res.status(400).json({ message: err });
            });
    }

    emailSignUp = (req, res) => {
        const newUser: any = new User(req.body);
        const randomPass = AuthService.genPassCode();
        newUser.password = randomPass;
        newUser.role = 'User';

        newUser.save()
            .then((user) => {
                // Send email here
                console.log('Your Bazardesh account password is ' + randomPass);
                emailService.sendEmail(
                    user.email, 
                    'Bazardesh account password', 
                    'Your Bazardesh account password is ' + randomPass
                );
                // CREATE A CART FOR USER
                cart.createUserCart({items: []}, user._id);

                res.status(200)
                .json({message: 'Sign up successful. Check your email inbox.'});
            })
            .catch((err) => {
                if (err.errors && err.errors.email && err.errors.email.message) {
                    err = err.errors.email.message;
                }
                res.status(422).json({ message: err });
            });
    }
    /**
     * Change a users password
     */
    changePassword = (req, res) => {
        var userId = req.user._id;
        var oldPass = String(req.body.oldPassword);
        var newPass = String(req.body.newPassword);
        return User.findById(userId).exec()
            .then((user: any) => {
                if(!user) {
                    return res.status(404).send({ message: 'User not found!' });
                }
                if (user.authenticate(oldPass)) {
                    return this.hashPassword(user, newPass)
                        .then((updatedUser: any) => {
                            return User.update({_id: userId}, updatedUser).exec();
                        })
                        .then(() => {
                            return res.status(200).send({ message: 'Password changed successfully' });
                        })
                        .catch(this.handleError(res));
                } else {
                    return res.status(403).send({ message: 'Incorrect current password!' });
                }
            });
    }

    resetPassword = (req, res) => {
        const phoneNumber = req.body.phoneNumber;
        const email = req.body.email;
        const randomPass = AuthService.genPassCode();
        const isEmail = !!email;
        var UserQuery;

        if(email) {
            UserQuery = User.findOne({ email: email })
        } else if (phoneNumber) {
            UserQuery = User.findOne({ phoneNumber: phoneNumber })
        } else {
            return res.status(400).send({message: 'Bad data!'})
        }

        UserQuery
        .exec()
        .then(this.handleEntityNotFound(res))
        .then((user: any) => {
            return new Promise((resolve, reject) => {
                user.password = randomPass;
                user.makeSalt((saltErr, salt) => {
                    if (saltErr) {
                        return reject(saltErr);
                    }
                    user.salt = salt;
                    user.encryptPassword(user.password, (encryptErr, hashedPassword) => {
                        if (encryptErr) {
                            return reject(encryptErr);
                        }
                        user.password = hashedPassword;
                        return resolve(user);
                    });
                })
            })
        })
        .then((updatedUser: any) => {
            return User.update({_id: updatedUser._id}, updatedUser).exec();
        })
        .then((updatedUser: any) => {
            const userMessage = 'Your Bazardesh account password is ' + randomPass;
            console.log(userMessage);
            if(isEmail) {
                // send email
                emailService.sendEmail(
                    email,
                    'Bazardesh account password',
                    userMessage
                );
                return { 
                    message: 'New password has been sent to ' + email
                }
            } else {
                // send sms
                sms.sendSms(phoneNumber, userMessage);
                return { 
                    message: 'New password has been sent to ' + phoneNumber
                }
            }
            
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
        
    }

    addUserByAdmin = (req, res) => {
        const newUser: any = new User(req.body);
        newUser.role = 'User';
        newUser.password = AuthService.genPassCode();
        newUser.save()
        .then((user) => {
            return User.findOne({phoneNumber: user.phoneNumber}).exec();
        })
        .then((user) => {
            res
            .status(200)
            .json(user);
        })
        .catch(function (err) {
            if (err.errors && err.errors.phoneNumber && err.errors.phoneNumber.message) {
                err = err.errors.phoneNumber.message;
            }
            res.status(400).json({ message: err });
        });
    }
    updateUserByAdmin = (req, res) => {
        if(req.body.role === 'User') {
            User.update({_id: req.body._id}, req.body)
            .exec()
            .then(user => {
                res.json(user);
            })
            .catch(e => {
                res.status(500).json(e)
            });
        } else {
            res.status(401).send('Invalid user role')
        }
    }
    getUsersByPhoneByAdmin = (req, res) => {
        req.query.where = {
            $or: [
                { phoneNumber: { $regex: req.query.phoneNumber, $options: 'i'  } }
            ]
        }
        // {phoneNumber: req.query.phoneNumber}
        return this.index(req, res);
    }

    /**
     * Get my info
     */
    profile = (req, res, next) => {
        var userId = req.user._id;
        console.log('profile')
        return User.findOne({ _id: userId }, '-salt -password')
        .exec()
        .then(user => { // don't ever give out the password or salt
            if (!user) {
                return res.status(401).end();
            }
            return res.json(user);
        })
        .catch(err => next(err));
    }

    // For SA
    getUsersSA = (req, res) => {
        req.query.select = '-password -salt';
        this.indexWithCount(req, res);
    }

    /**
     * Authentication callback
     */
    authCallback = (req, res) => {
        res.redirect('/');
    }
}


// Replace search with index
// Replace users with index(where: role: 'user')


