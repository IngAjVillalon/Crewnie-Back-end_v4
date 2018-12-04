import Option from './option.model';
import BaseCtrl from './../base';

export default class OptionCtrl extends BaseCtrl {
    model = Option;

    getByName = (req, res) => {
        this.model.findOne({name: req.params.name})
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res, 404));
    }

    getByGroupName = (req, res) => {
        this.model.find({group: req.params.name})
        .exec()
        .then(this.handleEntityNotFound(res))
        .then((options: any[]) => {
            console.log(req.params.name, options)
            let group = {group: req.params.name}
            if(!options.length) {
                throw {message: 'No options found'}
            }
            options.forEach(opt => {
                group[opt.name] = opt.value;
            });
            return group;
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res, 404));
    }

    updateByName = (req, res) => {
        this.model.findOne({ name: req.params.name })
        .exec()
        .then(this.patchUpdates({ value: req.body.value, group: req.body.group }))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res, 404));
    }

}