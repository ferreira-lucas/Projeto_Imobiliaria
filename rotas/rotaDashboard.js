const express = require('express')
const session = require('express-session')
const dao = require('../dao/UsuariosDAO')
const rota = express.Router()

rota.get('/', (req, res, next) => {
    res.render('../view/dashboard.html')
})

module.exports = rota