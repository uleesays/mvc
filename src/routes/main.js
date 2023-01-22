const express = require('express');

const {renderHome, renderAbout} = require('../controllers/userControllers');

const routerMain = express.Router();



routerMain.get('/', renderHome);

routerMain.get('/about', renderAbout)


module.exports = routerMain;