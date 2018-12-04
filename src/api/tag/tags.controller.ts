import Tag from './tags.model';
import BaseCtrl from './../base';
import * as express from 'express';

export default class TagsCtrl extends BaseCtrl {
    model = Tag;

    getByID = (req, res) => {
        
        Tag.findOne({
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
        req.body.updatedBy = req.user._id;
        
        Tag.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(req.body))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

}