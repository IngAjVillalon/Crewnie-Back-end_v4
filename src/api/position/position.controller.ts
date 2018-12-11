import BaseCtrl from "../base";
import Position from './position.model';

export default class ProjectCtrl extends BaseCtrl {
    model = Position;

    saveUserFeedback = (req, res) => {
        var depertment = req.body;
        depertment.user = req.user._id;

        let newDepertment = new Position(depertment);
        newDepertment.save()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res))
    }

    getAdminFeedbacks = (req, res) => {
        Position.find()
            .populate('user', 'displayName eamil phoneNumber createdAt')
            .exec()
            .then(this.handleEntityNotFound(res))
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    insertAllPositions = (req, res) => {
        let positions = req.body;

        Position.insertMany(positions)
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
        Position
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

    getPositionsByDepartment = (req, res) => {
        let departmentId = req.params.id;

        let sort = req.query.sort;
        let skip = parseInt(req.query.skip);
        let limit = parseInt(req.query.limit);


        Position
            .find({ 'departmentId': departmentId })
            .limit(limit)
            .skip(skip)
            .sort(sort)
            .exec()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    getPositionsByIdList = (req, res) => {
        let positionList = req.body;

        let sort = req.query.sort;
        let skip = parseInt(req.query.skip);
        let limit = parseInt(req.query.limit);


        Position
            .find({ '_id': { $in : positionList} })
            .limit(limit)
            .skip(skip)
            .sort(sort)
            .exec()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));


    }

    updatePositionById = (req, res) => {

        Position.findOne({
            _id: req.params.id
        })
            .exec()
            .then(this.handleEntityNotFound(res))
            .then(this.patchUpdates(req.body))
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    updateAllPositionsByDepartmentId = (req, res) => {
        let positions = req.body;
        let positionIds = [];
        positions.forEach(element => {
            positionIds.push(element._id);
            Position.update({"_id": element._id}, element, ()=>{});
        });
        res.send('return');
        console.log(positionIds);

        // Position.updateMany({"_id": { $in: positionIds}}, positions, { multi: true }).exec().then(this.respondWithResult(res));

        // Position.updateMany({}, positions)
        // .exec()
        // .then(this.respondWithResult(res))
        // .catch(this.handleError(res));
    }
}