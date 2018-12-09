import BaseCtrl from "../base";
import Depertment from './department.model';

export default class ProjectCtrl extends BaseCtrl {
    model = Depertment;

    saveUserFeedback = (req, res) => {
        var depertment = req.body;
        depertment.user = req.user._id;

        let newDepertment = new Depertment(depertment);
        newDepertment.save()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res))
    }

    getAdminFeedbacks = (req, res) => {
        Depertment.find()
            .populate('user', 'displayName eamil phoneNumber createdAt')
            .exec()
            .then(this.handleEntityNotFound(res))
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    getDepertments = (req, res) => {
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
                    { name: { $regex: search, $options: 'i' } }
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
        Depertment
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

    getDepertmentsByProject = (req, res) => {
        let projectId = req.params.projectId;

        let sort = req.query.sort;
        let skip = parseInt(req.query.skip);
        let limit = parseInt(req.query.limit);


        Depertment
            .find({'projectId': projectId})
            .limit(limit)
            .skip(skip)
            .sort(sort)
            .exec()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }
}