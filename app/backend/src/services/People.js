const { People } = require('../database/models');

const getAll = async () => {
  const persons = await People.findAll();

  return persons;
};

module.exports = {
  getAll,
};
