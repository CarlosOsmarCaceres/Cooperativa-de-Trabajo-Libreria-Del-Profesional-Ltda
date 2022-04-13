const express = require("express");
const app = express();

const path= require('path');

const port = 3000;
//Ver CLase 38 inicio 20 min
//Ruta elementos estaticos
app.use(express.static('./public'));

app.listen(process.env.PORT || port, () => console.log(`http://localhost:${port}`))

//Ruta index
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html')
  })