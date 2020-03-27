const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const crypto = require('crypto');



const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index);

routes.post('/ongs', ongController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.index);

routes.post('/incidents', incidentController.create);

routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;