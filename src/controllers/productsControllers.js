const { getProducts } = require('../database')

module.exports = {
    //Trae la lista de detalle de productos
    getAll: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        getProducts.forEach((element) => {          //element es un nombre que yo elijo, no es una variable.
            res.write(
            `*****************
            ${element.name}
            ${element.price}
            ${element.description}
            ${element.discount}
            `)
        })
        res.end()
    },
    //Para mostrar detalle de un articulo
    getOne: (req, res)=> {
        res.set({'content-type':'text/plain;charset=utf-8'})

        let idProducto = +req.params.id; // el signo mas convierte el string de lo parseado en numero o Tambienn se puede usar Number

        let product = getProducts.find((product) => product.id === idProducto) //metod find devuelve el producto y filter devuelve un array.
                                                                                //product es un nombre que yo elijo, no es una variable
        res.write("Detalle de producto\n")
        res.write(`Nombre: ${product.name}\n`)
        res.write(`Precio: ${product.price}\n`)
        res.write(`Descripción: ${product.description}\n`)
        res.write(`Descuento: ${product.discount}\n`)
        res.end()
    }
};
