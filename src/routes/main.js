const express = require('express');

const {renderHome, renderAbout} = require('../controllers/mainControllers');

const routerMain = express.Router();



routerMain.get('/', renderHome);

routerMain.get('/about', renderAbout)


module.exports = routerMain;