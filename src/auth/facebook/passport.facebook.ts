let passport = require('passport');
var FacebookTokenStrategy = require('passport-facebook-token');
import CartService from './../../services/cart.service';

import Config from '../../config';
const config = new Config();
let cart = new CartService();


function fbAuthenticate(User, profile, done) {
    User.findOne({
        'facebook.id': profile.id
    })
    .exec()
    .then(user => {
        if(user) {
            done(null, user)
        } else {
            let newUser = new User({
                provider: 'facebook',
                displayName: profile.displayName,
                email: getFBEmail(profile),
                avatar: getFBPhoto(profile),
                facebook: profile
            })
            newUser.save()
            .then(createdUser => {
                // console.log('----- created',createdUser)

                // CREATE A CART FOR USER
                cart.createUserCart({items: []}, createdUser._id);

                done(null, createdUser)
            })
        }
    })
    .catch(err => done(err));
}

function getFBEmail(profile) {
    if(!profile.emails) {
        return null;
    }
    if(!profile.emails.length) {
        return null;
    }
    return profile.emails[0].value;
}
function getFBPhoto(profile) {
    if(!profile.photos) {
        return null;
    }
    if(!profile.photos.length) {
        return null;
    }
    return profile.photos[0].value;
}

export function setup(User) {
    passport.use(new FacebookTokenStrategy({
        clientID: config.facebook.appID,
        clientSecret: config.facebook.appSecret
      }, function(accessToken, refreshToken, profile, done) {
        // console.log('---------------', profile);
        return  fbAuthenticate(User, profile, done);
      }
    ));
}