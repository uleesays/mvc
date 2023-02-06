const express = require('express');

const {renderHome, renderAbout, database} = require('../controllers/mainControllers');

const routerMain = express.Router();



routerMain.get('/', renderHome);

routerMain.get('/about', renderAbout);

routerMain.get('/database', database);

module.exports = routerMain;