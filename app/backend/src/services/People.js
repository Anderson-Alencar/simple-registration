const { People } = require('../database/models');

const getAll = async () => {
  const peoples = await People.findAll();

  return peoples;
};

module.exports = {
  getAll,
};
