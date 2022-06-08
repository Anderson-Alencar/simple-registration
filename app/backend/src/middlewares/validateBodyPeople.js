const { schema } = require('../schemas/PeopleSchema');

// eslint-disable-next-line consistent-return
const validateBodyPeople = (req, res, next) => {
  const { fullName, birthDate } = req.body;

  const { error } = schema.validate({ fullName, birthDate });

  if (error) {
    const { details: [{ message }] } = error;

    return res.status(400).json(message);
  }

  next();
};

module.exports = {
  validateBodyPeople,
};
