const synths = require('../database/synths');

const renderAllSynths = (req, res) => {
    res.send(synths)
}

module.exports = {
    renderAllSynths,
}