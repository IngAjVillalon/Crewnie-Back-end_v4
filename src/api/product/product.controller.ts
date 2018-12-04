import Product from './product.model';
import BaseCtrl from './../base';
import * as express from 'express';


export default class ProductCtrl extends BaseCtrl {
    model = Product;

    constructor() {
        super();
    }

    all = (req: express.Request, res: express.Response) => {
        return Product.find()
        .exec()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    getByID = (req, res) => {
        Product.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    getProducts = (req, res) => {
        let slug = req.params.slug;

        let search = req.query.search;
        let sort = req.query.sort;
        let skip = parseInt(req.query.skip);
        let limit = parseInt(req.query.limit);

        req.query.where = {};

        // SEARCH IN NAME
        if (search) {
            req.query.where = { 
                $or: [
                    // { $text: { $search: search } },
                    { name: { $regex: search, $options: 'i'  } }
                ]
            }
        }
        // SEARCH BY CAT AND SUB CAT
        if (slug) {
            const slugRegExp = new RegExp(slug, "ig")
            req.query.where = { 
                $or: [ 
                    { categories: { $regex: slugRegExp } }, 
                    { tags: { $regex: slugRegExp } } 
                ]
            }
        }
        // Exclude child products
        // console.log('-----', req.query.where)

        // req.query.where.isChild = false;
        Product
          .find(req.query.where)
          .limit(limit)
          .skip(skip)
          .sort(sort)
          .populate('children', '-tags -categories')
        //   .select(select)
          .exec()
          .then(this.respondWithResult(res))
          .catch(this.handleError(res));
    }

    getProductsWithCount = (req, res) => {
        let search = req.query.search;
        let slug = req.params.slug;

        if (search) {
            req.query.where = { 
                $or: [
                    // { $text: { $search: search } },
                    { name: { $regex: search, $options: 'i'  } }
                ]
            }
        }
        // SEARCH BY CAT AND SUB CAT
        if (slug) {
            const slugRegExp = new RegExp(slug, "ig")
            req.query.where = { 
                $or: [ 
                    { categories: { $regex: slugRegExp } }, 
                    { tags: { $regex: slugRegExp } } 
                ]
            }
        }
        this.indexWithCount(req, res);
    }

    updateByProductID = (req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        // !!!!!!!!!!!!!! MUST HAVE user._id
        req.body.updatedBy = req.user._id;

        Product.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(req.body))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    // insertProduct = (req, res) => {
    //     if (req.body._id) {
    //         delete req.body._id;
    //     }
    // }

}