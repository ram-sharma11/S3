const joi = require('joi');

module.exports.registerValidations = joi.object({
    email : joi.string().required().email(),
    name : joi.string().min(3).max(20).required(),
    password: joi.string().min(6).required(),

})

module.exports.loginValidations = joi.object({
    email : joi.string().required().email(),
    password : joi.string().required().min(6)
})
