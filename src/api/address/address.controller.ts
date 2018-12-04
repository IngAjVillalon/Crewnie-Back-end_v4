import Address from './address.model';
import BaseCtrl from './../base';
import * as express from 'express';


export default class AddressCtrl extends BaseCtrl {
    model = Address;

    constructor() {
        super();
    }

    getByID = (req, res) => {
        
        Address.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    updateByID = (req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        // !!!!!!!!!!!!!! MUST HAVE user._id
        req.body.updatedBy = req.user ? req.user._id : null;
        
        Address.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(req.body))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    deleteUserAddress = (req, res) => {        
        Address.remove({
            _id: req.params.addressID
        })
        .exec()
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));        
    }

}