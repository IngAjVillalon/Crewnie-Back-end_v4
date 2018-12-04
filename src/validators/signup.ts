import * as Joi from 'joi';
 
export const phoneSignup = {
  body: {
    displayName: Joi.string().required(),
    phoneNumber: Joi.string().min(11).required()
  }
}

export const emailSignup = {
  body: {
    displayName: Joi.string().required(),
    email: Joi.string().email().required()     
  }
}
