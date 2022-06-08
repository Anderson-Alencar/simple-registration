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

const update = async (id, fullName, birthDate) => {
  const [peopleUpdated] = await People.update({ fullName, birthDate }, { where: { id } });

  return peopleUpdated;
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
};
