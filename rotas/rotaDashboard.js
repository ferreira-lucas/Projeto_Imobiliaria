const express = require('express')
const session = require('express-session')
const sessions = require('express-session')
const dao = require('../dao/UsuariosDAO')
const rota = express.Router()

rota.get('/', (req, res, next) => {
    if(!sessions.login || sessions.login.tipo == 'Cliente'){
        res.render('/')
    }else if(sessions.login.tipo == 'Corretor'){
        res.render('../views/dashboard.html')
    }else if(sessions.login.tipo == 'Admin'){
        res.render('../views/dashboard.html')
    }
})

module.exports = rota