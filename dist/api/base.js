"use strict";
exports.__esModule = true;
var _ = require("lodash");
var BaseCtrl = /** @class */ (function () {
    function BaseCtrl() {
        var _this = this;
        // Check if JSON Object
        this.toJson = function (str) {
            try {
                JSON.parse(str);
            }
            catch (e) {
                return str;
            }
            return JSON.parse(str);
        };
        this.respondWithResult = function (res, statusCode) {
            if (statusCode === void 0) { statusCode = 200; }
            return function (entity) {
                if (entity) {
                    res.status(statusCode).json(entity);
                }
            };
        };
        this.saveUpdates = function (updates) {
            return function (entity) {
                var updated = _.extend(entity, updates);
                return updated.save()
                    .then(function (updated) {
                    return updated;
                });
            };
        };
        this.removeEntity = function (res) {
            return function (entity) {
                if (entity) {
                    return entity.remove()
                        .then(function () {
                        res.status(204).end();
                    });
                }
            };
        };
        this.patchUpdates = function (patches) {
            return function (entity) {
                if (patches._id) {
                    delete patches._id;
                }
                try {
                    entity = _.extend(entity, patches);
                }
                catch (err) {
                    return Promise.reject(err);
                }
                return entity.save();
            };
        };
        this.handleEntityNotFound = function (res) {
            return function (entity) {
                if (!entity) {
                    return Promise.reject({ message: 'Entity not found' });
                }
                return entity;
            };
        };
        this.handleError = function (res, statusCode) {
            if (statusCode === void 0) { statusCode = 500; }
            return function (err) {
                console.log('Base controller handle error', err);
                res.status(statusCode).send(err);
            };
        };
        // Get all
        this.index = function (req, res) {
            var where = _this.toJson(req.query.where);
            // let search = this.toJson(req.query.search);
            if (!where) {
                where = {};
            }
            // if (search && search.name) {
            //   where.name = { $regex: new RegExp(search.name, "ig") };
            // }
            var select = _this.toJson(req.query.select);
            var sort = req.query.sort;
            var skip = parseInt(req.query.skip);
            var limit = parseInt(req.query.limit);
            _this.model
                .find(where)
                .limit(limit)
                .skip(skip)
                .sort(sort)
                .select(select)
                .exec()
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        this.indexWithCount = function (req, res) {
            var where = _this.toJson(req.query.where);
            if (!where) {
                where = {};
            }
            var select = _this.toJson(req.query.select);
            var sort = req.query.sort;
            var skip = parseInt(req.query.skip);
            var limit = parseInt(req.query.limit);
            _this.model
                .find(where)
                .limit(limit)
                .skip(skip)
                .sort(sort)
                .select(select)
                .exec()
                .then(function (data) {
                return _this.model.count(where).then(function (count) {
                    return { data: data, count: count };
                });
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        // Count all
        this.count = function (req, res) {
            _this.model.count(function (err, count) {
                if (err) {
                    return console.error(err);
                }
                res.json(count);
            });
        };
        // Insert
        this.insert = function (req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            // req.body.createdBy = req.user._id;
            // console.log(req.body)
            _this.model.create(req.body)
                .then(_this.respondWithResult(res, 201))["catch"](_this.handleError(res));
        };
        // Get by id
        this.get = function (req, res) {
            _this.model.findById(req.params.id).exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        // Update by id
        this.update = function (req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            req.body.updatedBy = req.user._id;
            _this.model.findById(req.params.id).exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.patchUpdates(req.body))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        // Delete by id
        this["delete"] = function (req, res) {
            _this.model.findById(req.params.id).exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.removeEntity(res))["catch"](_this.handleError(res));
        };
        this.rejectPackage = function (userId) {
            return function (entity) {
                try {
                    if (!entity.rejected)
                        entity.rejected = [];
                    entity.rejected.push(userId);
                    var index = entity.assigned.indexOf(userId);
                    if (index > -1)
                        entity.assigned.splice(index, 1); // Remove from assigned list
                    entity = _.extend(entity, { rejected: userId }); // Insert into rejected list
                }
                catch (err) {
                    return Promise.reject(err);
                }
                return entity.save();
            };
        };
        this.acceptPackage = function (userId) {
            return function (entity) {
                try {
                    if (!entity.accepted)
                        entity.accepted = [];
                    entity.accepted.push(userId);
                    var index = entity.assigned.indexOf(userId);
                    if (index > -1)
                        entity.assigned.splice(index, 1); // Remove from assigned list
                    entity = _.extend(entity, { accepted: userId }); // Insert into accepted list
                }
                catch (err) {
                    return Promise.reject(err);
                }
                return entity.save();
            };
        };
    }
    return BaseCtrl;
}());
exports["default"] = BaseCtrl;
//# sourceMappingURL=base.js.map