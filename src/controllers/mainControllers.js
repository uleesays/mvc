const synths = require("../database/synths");

const renderHome = (req,res) => {
    res.send('<h1>Rutas: /synths /synths/:id /search?model=sub-37 /new-synth /synth-edit/:id</h1>');
};

const renderAbout = (req,res) => {
    res.send('<h1>Este es el about</h1>');
}

const database = (req,res) => {
    res.send(synths);
}

module.exports = {
    renderHome,
    renderAbout,
    database
}