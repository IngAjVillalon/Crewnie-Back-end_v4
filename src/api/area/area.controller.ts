import Area from './area.model';
import BaseCtrl from './../base';
import * as express from 'express';

export default class AreaCtrl extends BaseCtrl {
    model = Area;

    constructor() {
        super();
    }

    getByID = (req, res) => {
        
        Area.findOne({
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
        
        Area.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(req.body))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

}