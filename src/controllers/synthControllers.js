const synths = require('../database/synths');

const renderAllSynths = (req, res) => {
    res.send(synths)
}

const renderSynthId = (req, res) => {

    const { id } = req.params;

    const synth = synths.find(elem => elem.id == id);

    if (synth) {
        res.send(synth);
    } else {
        res.send("Not found")
    }

}

const renderSynthModel = (req, res) => {

    const { model } = req.params;
    const synth = synths.filter(elem => elem.model.includes(model));
    if (synth.length) {
        res.send(synth);
    } else {
        res.send("Not Found");
    }


}

module.exports = {
    renderAllSynths,
    renderSynthId,
    renderSynthModel
}