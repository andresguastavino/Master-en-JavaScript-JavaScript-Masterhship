'use strict'

var app = require('./app')
var port = 3700
var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/portafolio')
  .then(() => {
    console.log('Conexion a la base de datos establecida con exito')

    // Creacion del servidor
    app.listen(port, () => {
      console.log('Servidor corriendo correctamente en localhost:3700')
    })
  })
  .catch(error => console.log(error))