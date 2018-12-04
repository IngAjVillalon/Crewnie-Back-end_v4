import * as _ from 'lodash';
import * as express from 'express';

abstract class BaseCtrl {

  abstract model: any;

  // Check if JSON Object
  toJson = (str: string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return str;
    }
    return JSON.parse(str);
  }

  respondWithResult = (res: any, statusCode = 200) => {
    return function (entity: any) {
      if (entity) {
        res.status(statusCode).json(entity);
      }
    }
  }

  saveUpdates = (updates: any) => {
    return function (entity: any) {
      var updated = _.extend(entity, updates);
      return updated.save()
        .then((updated: any) => {
          return updated;
        });
    }
  }

  removeEntity = (res: any) => {
    return function (entity: any) {
      if (entity) {
        return entity.remove()
          .then(() => {
            res.status(204).end();
          });
      }
    }
  }

  patchUpdates = (patches: any) => {
    return function (entity: any) {
      if (patches._id) {
        delete patches._id;
      }
      try {
        entity = _.extend(entity, patches);
      } catch (err) {
        return Promise.reject(err);
      }
      return entity.save();
    }
  }

  handleEntityNotFound = (res: any) => {
    return function (entity: any) {
      if (!entity) {
        return Promise.reject({message: 'Entity not found'});
      }
      return entity;
    }
  }

  handleError = (res: any, statusCode = 500) => {
    return function (err: any) {
      console.log('Base controller handle error', err);
      res.status(statusCode).send(err);
    }
  }

  // Get all
  index = (req: express.Request, res: express.Response) => {
    let where = this.toJson(req.query.where);
    // let search = this.toJson(req.query.search);

    if (!where) {
      where = {};
    }
    // if (search && search.name) {
    //   where.name = { $regex: new RegExp(search.name, "ig") };
    // }

    let select = this.toJson(req.query.select);
    let sort = req.query.sort;
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    this.model
      .find(where)
      .limit(limit)
      .skip(skip)
      .sort(sort)
      .select(select)
      .exec()
      .then(this.respondWithResult(res))
      .catch(this.handleError(res));
  };

  indexWithCount = (req, res) => {
    let where = this.toJson(req.query.where);

    if (!where) {
        where = {};
    }

    let select = this.toJson(req.query.select);
    let sort = req.query.sort;
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);

    this.model
    .find(where)
    .limit(limit)
    .skip(skip)
    .sort(sort)
    .select(select)
    .exec()
    .then(data => {
        return this.model.count(where).then(count => {
            return {data, count}
        })
    })
    .then(this.respondWithResult(res))
    .catch(this.handleError(res));
}

  // Count all
  count = (req: express.Request, res: express.Response) => {
    this.model.count((err: any, count: number) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  };

  // Insert
  insert = (req: any, res: express.Response) => {
    if (req.body._id) {
      delete req.body._id;
    }
    // req.body.createdBy = req.user._id;
    // console.log(req.body)
    this.model.create(req.body)
      .then(this.respondWithResult(res, 201))
      .catch(this.handleError(res));
  };

  // Get by id
  get = (req: express.Request, res: express.Response) => {
    this.model.findById(req.params.id).exec()
      .then(this.handleEntityNotFound(res))
      .then(this.respondWithResult(res))
      .catch(this.handleError(res));
  };

  // Update by id
  update = (req: any, res: express.Response) => {
    if (req.body._id) {
      delete req.body._id;
    }
    req.body.updatedBy = req.user._id;
    this.model.findById(req.params.id).exec()
      .then(this.handleEntityNotFound(res))
      .then(this.patchUpdates(req.body))
      .then(this.respondWithResult(res))
      .catch(this.handleError(res));
  };

  // Delete by id
  delete = (req: express.Request, res: express.Response) => {
    this.model.findById(req.params.id).exec()
      .then(this.handleEntityNotFound(res))
      .then(this.removeEntity(res))
      .catch(this.handleError(res));
  }


  rejectPackage = (userId: string) => {
    return function (entity: any) {
      try {
        if (!entity.rejected) entity.rejected = [];
        entity.rejected.push(userId);
        var index = entity.assigned.indexOf(userId);
        if (index > -1) entity.assigned.splice(index, 1); // Remove from assigned list
        entity = _.extend(entity, { rejected: userId }); // Insert into rejected list
      } catch (err) {
        return Promise.reject(err);
      }
      return entity.save();
    }
  }

  acceptPackage = (userId: string) => {
    return function (entity: any) {
      try {
        if (!entity.accepted) entity.accepted = [];
        entity.accepted.push(userId);
        var index = entity.assigned.indexOf(userId);
        if (index > -1) entity.assigned.splice(index, 1); // Remove from assigned list
        entity = _.extend(entity, { accepted: userId }); // Insert into accepted list
      } catch (err) {
        return Promise.reject(err);
      }
      return entity.save();
    }
  }


}

export default BaseCtrl;
