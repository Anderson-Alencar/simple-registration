const express = require('express');
const PeopleController = require('../controllers/People');

const peopleRouter = express.Router();

peopleRouter.get('/', PeopleController.getAll);
peopleRouter.get('/:id', PeopleController.getOne);

module.exports = [
  peopleRouter,
];
