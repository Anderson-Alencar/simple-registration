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

module.exports = {
  getAll,
  getOne,
};
