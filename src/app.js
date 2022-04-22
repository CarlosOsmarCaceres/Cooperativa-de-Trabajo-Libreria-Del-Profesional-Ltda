const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')))


//Enrutadores
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');

/* Middlewares de Rutas */
app.use('/', indexRouter) // HOME - Contact 
app.use('/productos', productsRouter) // Listado, detalle





app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}
`))
