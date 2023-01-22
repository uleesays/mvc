const express = require('express');

const {renderAllSynths, renderSynthId} = require('../controllers/synthControllers');


const routerSynth = express.Router();



routerSynth.get('/synths', renderAllSynths);
routerSynth.get('/synth/:id', renderSynthId);




module.exports = routerSynth;