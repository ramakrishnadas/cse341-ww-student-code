const routes = require('express').Router();
const temples = require('../controllers/temple.js');

// Get all that are published request
routes.get('/published', temples.findAllPublished);

routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

// Put request
routes.put('/:id', temples.update);

// Delete request
routes.delete('/:id', temples.delete);

// Delete All request
routes.delete('/', temples.deleteAll);




module.exports = routes;
