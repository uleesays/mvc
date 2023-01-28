const express = require('express');
const routerMain = require('./src/routes/main');
const routerSynth = require('./src/routes/synthRoute');
const methodOverride = require('method-override');
const morgan = require("morgan"); 
const app = express();
const port = process.env.PORT || 3005;

app.set("views", "views"); 
app.set("view engine", "ejs"); 

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(morgan("dev")); 
app.use(express.static("public")); 
app.use(methodOverride('_method'));

app.use(routerMain); 
app.use(routerSynth);

app.listen(port, () => console.log(`Server running in port ${port}...`));
