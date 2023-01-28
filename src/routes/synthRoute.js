const express = require('express');

const {renderAllSynths, renderSynthId, search, formNewSynth, postSynth} = require('../controllers/synthControllers');

const routerSynth = express.Router();

routerSynth.get('/synths', renderAllSynths);
routerSynth.get('/synth/:id', renderSynthId);
routerSynth.get('/search', search);

routerSynth.get('/new-synth', formNewSynth); 
routerSynth.post('/new-synth', postSynth);



module.exports = routerSynth;