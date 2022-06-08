const PeopleService = require('../services/People');

const getAll = async (_req, res) => {
  try {
    const peoples = await PeopleService.getAll();

    return res.status(200).json(peoples);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const people = await PeopleService.getOne(id);

    if (!people) {
      return res.status(404).json({ error: 'People not found' });
    }

    return res.status(200).json(people);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const { fullName, birthDate } = req.body;
    const newPeople = await PeopleService.create({ fullName, birthDate });

    return res.status(201).json(newPeople);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, birthDate } = req.body;

    const peopleUpdated = await PeopleService.update(id, fullName, birthDate);

    if (!peopleUpdated) {
      return res.status(404).json({ error: 'People not found' });
    }

    return res.status(200).json({ message: 'People successfully updated' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
};
