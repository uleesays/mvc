const express = require('express');

const {renderAllSynths} = require('../controllers/synthControllers');


const routerSynth = express.Router();



routerSynth.get('/synths', renderAllSynths);



module.exports = routerSynth;