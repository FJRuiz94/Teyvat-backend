'use strict'

const express = require('express')
const database = require('./modules/database')
// const bearerToken = require('express-bearer-token');
const cors = require("cors");

//middlewares con las rutas
const charactersController = require('./controllers/CharactersController')
const indexController = require('./controllers/indexController')

//server instance
const app = express()

// app.use(bearerToken())
app.use(cors())

//middleware para parsear los cuerpos tipo application/JSON en el cuerpo
app.use(express.json())

//enganchamos los controladores de los diferentes recursos
app.use(charactersController)
app.use(indexController)

database.connect()

module.exports = app