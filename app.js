const express = require('express');

const routerMain = require('./src/routes/main');

const routerSynth = require('./src/routes/synthRoute');

/* const path = require("path"); */

const morgan = require("morgan"); 

const app = express();

app.use(express.urlencoded({ extended: false })); 

app.use(morgan("dev")); 

app.use(express.json());

app.use(express.static("public")); 

app.use(routerMain); 

app.use(routerSynth);

app.set("views", "views"); 

app.set("view engine", "ejs"); 

const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server running in port ${port}...`));
