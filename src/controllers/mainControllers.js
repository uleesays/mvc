const renderHome = (req,res) => {
    res.send('<h1>Hola MVC</h1>');
};

const renderAbout = (req,res) => {
    res.send('<h1>Este es el about</h1>');
}

module.exports = {
    renderHome,
    renderAbout
}