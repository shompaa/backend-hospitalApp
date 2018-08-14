// Requires
var express = require('express');
var colors = require('colors');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conexion a BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos:', 'Online'.green);

})

// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })
});

//Escuchar preticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000:', 'Online'.green);
});