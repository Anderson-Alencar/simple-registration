const Joi = require('joi').extend(require('@joi/date'));

const schema = Joi.object({
  fullName: Joi.string().required().messages({
    'any.required': 'O campo "Nome completo" é obrigatório',
  }),
  birthDate: Joi.date().format('YYYY-MM-DD').required()
    .messages({
      'any.required': 'O campo "Data de nascimento" é obrigatório',
      'date.format': 'O campo "Data de nascimento" deve ter o sequinte formato: DD/MM/AAAA',
      'date.base': 'O campo "Data de nascimento" deve ter o sequinte formato: DD/MM/AAAA',
    }),
});

module.exports = {
  schema,
};
