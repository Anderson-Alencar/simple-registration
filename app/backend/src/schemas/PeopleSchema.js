const Joi = require('joi').extend(require('@joi/date'));

const schema = Joi.object({
  fullName: Joi.string().required(),
  birthDate: Joi.date().format('YYYY-MM-DD').required(),
});

module.exports = {
  schema,
};
