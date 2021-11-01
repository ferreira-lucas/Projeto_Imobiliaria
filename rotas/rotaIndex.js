const express = require('express')
const app = require('../aplicacao')
const sessions = require('express-session')
const rota = express.Router()

rota.get('/', (req, res, next) => {
    res.render('../view/index.html')
    if(sessions.login){
        console.log('Sessão iniciada')
        console.log(`Bem vindo ${sessions.login.nome}`)
    }else if(!sessions.login){
        console.log('Sessão não iniciada')
    }
})

module.exports = rota