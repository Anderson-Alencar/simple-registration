const { People } = require('../database/models');

const getAll = async () => {
  const peoples = await People.findAll();

  return peoples;
};

const getOne = async (id) => {
  const people = await People.findByPk(id);

  return people;
};

const create = async (data) => {
  const newPeople = await People.create(data);

  return {
    id: newPeople.dataValues.id,
    ...data,
  };
};

module.exports = {
  getAll,
  getOne,
  create,
};
