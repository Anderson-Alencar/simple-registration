const express = require('express');
const PeopleController = require('../controllers/People');
const { validateBodyPeople } = require('../middlewares/validateBodyPeople');

const peopleRouter = express.Router();

peopleRouter.get('/', PeopleController.getAll);
peopleRouter.get('/:id', PeopleController.getOne);
peopleRouter.post('/', validateBodyPeople, PeopleController.create);

module.exports = {
  peopleRouter,
};
