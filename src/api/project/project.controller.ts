import BaseCtrl from "../base";
import ProjectSchema from './project.model';

export default class ProjectCtrl extends BaseCtrl {
    model = ProjectSchema;

    saveUserFeedback = (req, res) => {
        var feedback = req.body;
        feedback.user = req.user._id;

        let newFeedback = new ProjectSchema(feedback);
        newFeedback.save()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res))
    }

    getAdminFeedbacks = (req, res) => {
        ProjectSchema.find()
            .populate('user', 'displayName eamil phoneNumber createdAt')
            .exec()
            .then(this.handleEntityNotFound(res))
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    getProjects = (req, res) => {
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
        ProjectSchema
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
}