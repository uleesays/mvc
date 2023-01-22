const express = require('express');

const {renderAllSynths, renderSynthId, renderSynthModel} = require('../controllers/synthControllers');


const routerSynth = express.Router();



routerSynth.get('/synths', renderAllSynths);
routerSynth.get('/synth/:id', renderSynthId);
routerSynth.get('/synthmodel/:model', renderSynthModel)




module.exports = routerSynth;