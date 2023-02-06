const synths = require('../database/synths');
const path = require('path'); //agregado para EJS

const { validationResult } = require('express-validator');

const renderAllSynths = (req, res) => {
    /*  res.send(synths) */
    res.render(path.join(__dirname, '../views/synths.ejs'), { 'allSynths': synths }) //agregado para EJS

    /* Esto de aca arriba, primer parametro le digo en donde encuentra synths.ejs, el segundo paramentro, que dato espera? le mando un objeto: clave / valor. La clave es la que estoy usando en synths.ejs, el valor es de donde saca la info. */
};

const renderSynthId = (req, res) => {

    const { id } = req.params; /* cuando hago res.send de req.params me manda un OBJ con un ID adentro, entonces por eso puedo hacer un destructuring, saco de adentro de params ese ID */

    const synth = synths.find(elem => elem.id == id); //esto devuelve un OJB, depende de lo que mande es como yo lo renderizo. En synths.ejs puedo recorrer la lista con un for, por que lo que devuelve linea 6 es un array. pero en el nuevo archivo va a recibir un obj entonces no voy a poner un for. 

    if (synth) {
        /* res.send(synth); */
        res.render(path.join(__dirname, '../views/synthDetail.ejs'), { synth })
    } else {
        res.send("Not found")
    }

};

/* const renderSynthModel = (req, res) => {

    const { model } = req.params;
    const synth = synths.filter(elem => elem.model.includes(model));
    if (synth.length) {
        res.send(synth);
    } else {
        res.send("Not Found");
    }


}; */

const search = (req, res) => {
    const { model } = req.query;

    /* no importa como este almacenado, filtro lo que busca el usuario pasado a  mayuscula y el modelo en la base de datos tambien lo paso a mayuscula  */

    const synth = synths.filter(e => e.model.toUpperCase().includes(model.toUpperCase()));

    /* usando un ternario, digo que si el largo es distinto a 0, encontro algo, entonces reciclo la vista de details, y sino mando a 404 */

    synth.length != 0 ? res.render(path.join(__dirname, '../views/synthDetail.ejs'), { synth }) : res.status(404);

    /*  res.send(name) */
};

const formNewSynth = (req, res) => {

    res.render(path.join(__dirname, '../views/formNewSynth.ejs'))

}

const postSynth = (req, res) => {

   
const resultValidation = validationResult(req);
   
    
    if (resultValidation.errors.length > 0) {
        return  res.render(path.join(__dirname, '../views/formNewSynth.ejs'), { 
        errors: resultValidation.mapped(),
        oldData: req.body
    })

    }

    const {
        type,
        brand,
        model,
        price,
    
    } = req.body;

    /* Multer para chequear q llegue imagen y asignarla*/

    const img = req.file ? req.file.filename : '';

    let newImage;

    if (img.length > 0) {

        newImage = `images/products/${img}`
    }

    const newId = synths[synths.length - 1].id + 1;

    const obj = {
        id: newId, /* OJO con nombrar solo newId, me va a generar los obj nuevos sin id, y con newId */
        type,
        brand,
        model,
        price,
        img: newImage
    };

    synths.push(obj);

    res.redirect('/synths');

}

const editSynth = (req,res) => {

    const {id} = req.params;
    const editSynth = synths.find( e => e.id == id);
    res.render(path.join(__dirname, '../views/editSynth.ejs'), {editSynth})


}

const editConfirm = (req,res) => {

    const imagen = req.file ? req.file.filename : '';
    let newImage;

    synths.forEach(e => {
        if (e.id == req.body.id){
            
            e.type = req.body.type;
            e.brand = req.body.brand;
            e.model = req.body.model;
            e.price = req.body.price;
            if (imagen.length > 0) {
                newImage = `images/products/${imagen}`
                e.img = newImage;
            }
        }
    });

    res.redirect('/synths');

}

const deleteSynth = (req,res) => {
    const idEliminar = req.params.id;
    let exists = false;
    for (var i = 0; i < synths.length; i++) {
        if (synths[i].id == idEliminar) {
            synths.splice(i,1);
            exists= true;
            break;
        }
    }
    if (!exists) res.send("NO DELETE")

    res.redirect('/synths')
}


module.exports = {
    renderAllSynths,
    renderSynthId,
    /*  renderSynthModel, */
    search,
    formNewSynth,
    postSynth,
    editSynth,
    editConfirm,
    deleteSynth
}