var Joi = require('joi');
module.exports = {
    phoneSignup: {
        body: {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
        }
    }
};
//# sourceMappingURL=schemas.js.map