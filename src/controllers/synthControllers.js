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

module.exports = {
    renderAllSynths,
    renderSynthId
}