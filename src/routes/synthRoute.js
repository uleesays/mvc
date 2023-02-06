const express = require('express');

const {renderAllSynths, renderSynthId, search, formNewSynth, postSynth, editSynth, editConfirm, deleteSynth} = require('../controllers/synthControllers');

const routerSynth = express.Router();

const path = require('path');
const multer = require('multer');

/* Express Validator */

const { body } = require('express-validator');

/* Configuraciones de Multer */

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: (req, file, cb) => {
        const newFile = `product-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, newFile)
    }
});

/* instancio multer */

const upload = multer({storage});

const validations = [
    body('type').notEmpty().withMessage('Especifica que tipo de sintetizador querés cargar'),
    body('brand').notEmpty().withMessage('Especifica la marca del sintetizador'),
    body('model').notEmpty().withMessage('Especifica el modelo del sintetizador'),
    body('price').notEmpty().withMessage('Escribi un precio válido'),
    body('img').custom((value, { req }) => {
        let file = req.file;
        let validExtensions = ['.jpg', '.jpeg', '.png'];
       
        if (!file) {
            throw new Error('Debes subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!validExtensions.includes(fileExtension)) {
    
                throw new Error(`Los formatos válidos son ${validExtensions.join(', ')}`);
    
            }

        }

        return true;
    })
]

routerSynth.get('/synths', renderAllSynths);
routerSynth.get('/synth/:id', renderSynthId);
routerSynth.get('/search', search);

routerSynth.get('/new-synth', formNewSynth); 
routerSynth.post('/new-synth', upload.single('img'), validations, postSynth);

routerSynth.get('/synth-edit/:id', editSynth);
routerSynth.put('/synth-edit', upload.single('img'), editConfirm);

routerSynth.delete('/synth-edit/delete/:id', deleteSynth);



module.exports = routerSynth;