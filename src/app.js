const express = require("express");
const app = express();
const path = require('path');
const process = require("process");
require("dotenv").config();
 
const PORT = process.env.PORT || 3000;
//Ver CLase 38 inicio 20 min
//Ruta elementos estaticos
app.use(express.static(path.join(__dirname, '../public'))); //Define rutas desde el main

 app.listen(PORT, () => console.log(`
    Server listen port ${PORT}
    http://localhost:${PORT}
    `));
//Ruta index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html')) //Define rutas desde el main
  })
  