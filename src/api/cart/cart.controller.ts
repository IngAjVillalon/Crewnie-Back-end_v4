import Cart from './cart.model';
import BaseCtrl from './../base';
import * as express from 'express';


export default class CartCtrl extends BaseCtrl {
    model = Cart;

    constructor() {
        super();
    }

    getUserCart = (req, res) => {
        Cart.findOne({
            userID: req.user._id
        })
        .exec()
        .then(this.respondWithResult(res))
        .catch(this.handleError(res))
    }
    updateUserCart = (req, res) => {
        Cart.findOneAndUpdate({userID: req.user._id}, req.body)
        .exec()
        .then(this.respondWithResult(res))
        .catch(this.handleError(res))
    }

    getByID = (req, res) => {
        
        Cart.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    updateByCartID = (req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        // !!!!!!!!!!!!!! MUST HAVE user._id
        req.body.updatedBy = req.user ? req.user._id : null;
        
        Cart.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(req.body))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

}