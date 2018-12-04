var _ = require('lodash');
var joi = require('joi');
var url = require('url');
var Schemas = require('./schemas');
module.exports = function (useJoiError) {
    if (useJoiError === void 0) { useJoiError = false; }
    // useJoiError determines if we should respond with the base Joi error
    // boolean: defaults to false
    var _useJoiError = _.isBoolean(useJoiError) && useJoiError;
    // enabled HTTP methods for request data validation
    var _supportedMethods = ['post', 'put'];
    // Joi validation options
    var _validationOptions = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true // remove unknown keys from the validated data
    };
    // return the validation middleware
    return function (req, res, next) {
        var route = req.route.path;
        var method = req.method.toLowerCase();
        console.log('requested route -------', url.parse(req.originalUrl));
        if (_.includes(_supportedMethods, method) && _.has(Schemas, route)) {
            // get schema for the current route
            var _schema = _.get(Schemas, route);
            if (_schema) {
                // Validate req.body using the schema and validation options
                return joi.validate(req.body, _schema, _validationOptions, function (err, data) {
                    if (err) {
                        // Joi Error
                        var JoiError = {
                            status: 'failed',
                            error: {
                                original: err._object,
                                // fetch only message and type from each error
                                details: _.map(err.details, function (_a) {
                                    var message = _a.message, type = _a.type;
                                    return ({
                                        message: message.replace(/['"]/g, ''),
                                        type: type
                                    });
                                })
                            }
                        };
                        // Custom Error
                        var CustomError = {
                            status: 'failed',
                            error: 'Invalid request data. Please review request and try again.'
                        };
                        // Send back the JSON error response
                        res.status(422).json(_useJoiError ? JoiError : CustomError);
                    }
                    else {
                        // Replace req.body with the data after Joi validation
                        req.body = data;
                        next();
                    }
                });
            }
        }
        next();
    };
};
//# sourceMappingURL=schemaValidator.js.map