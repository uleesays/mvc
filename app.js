const path = require("path");

const morgan = require("morgan"); //morganzuelo

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false })); 

app.use(morgan("dev")); 

app.use(express.json());

app.use(express.static("public")); 

app.set("views", "views"); 

app.set("view engine", "ejs"); 

const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server running in port ${port}...`));
