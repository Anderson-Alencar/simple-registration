const PeopleService = require('../services/People');

const getAll = async (_req, res) => {
  const peoples = await PeopleService.getAll();

  return res.status(200).json(peoples);
};

module.exports = {
  getAll,
};
