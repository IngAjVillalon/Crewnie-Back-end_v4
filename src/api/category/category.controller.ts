import Category from './category.model';
import BaseCtrl from './../base';
import * as express from 'express';

export default class CategoryCtrl extends BaseCtrl {
    model = Category;

    constructor() {
        super();
    }

    getPublicCategories = (req, res) => {

        Category.find()
        .populate('tags', 'name bengaliName slug active')
        .select('name bengaliName slug imgUrl active position')
        .sort('position')
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    getByID = (req, res) => {
        
        Category.findOne({
            _id: req.params.id
        })
        .populate('tags', 'name bengaliName slug active')
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
        
        Category.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(req.body))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

}