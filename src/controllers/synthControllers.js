const synths = require('../database/synths');
const path = require('path'); //agregado para EJS

const renderAllSynths = (req, res) => {
   /*  res.send(synths) */
   res.render(path.join(__dirname,'../views/synths.ejs'), {'allSynths': synths}) //agregado para EJS

   /* Esto de aca arriba, primer parametro le digo en donde encuentra synths.ejs, el segundo paramentro, que dato espera? le mando un objeto: clave / valor. La clave es la que estoy usando en synths.ejs, el valor es de donde saca la info. */
}

const renderSynthId = (req, res) => {

    const { id } = req.params; /* cuando hago res.send de req.params me manda un OBJ con un ID adentro, entonces por eso puedo hacer un destructuring, saco de adentro de params ese ID */

    const synth = synths.find(elem => elem.id == id); //esto devuelve un OJB, depende de lo que mande es como yo lo renderizo. En synths.ejs puedo recorrer la lista con un for, por que lo que devuelve linea 6 es un array. pero en el nuevo archivo va a recibir un obj entonces no voy a poner un for. 

    if (synth) {
        /* res.send(synth); */
        res.render(path.join(__dirname,'../views/synthDetail.ejs'), {synth})
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