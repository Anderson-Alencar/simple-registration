const { People } = require('../database/models');

const getAll = async () => {
  const peoples = await People.findAll();

  return peoples;
};

const getOne = async (id) => {
  const people = await People.findByPk(id);

  return people;
};

module.exports = {
  getAll,
  getOne,
};
