const express = require("express");
const app = express();

const path= require('path');


const port = 3000;

//Ruta elementos estaticos
app.use(express.static('./src/public'));
app.listen(process.env.PORT || port, () => console.log(`http://localhost:${port}`))

//Ruta register

//Ruta index
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html')
  })