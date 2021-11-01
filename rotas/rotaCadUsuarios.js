const express = require('express')
const rota = express.Router()
const dao = require('../dao/UsuariosDAO.js')
const usuario = require('../class/Usuario.js')

rota.get('/', (req, res, next) => {
    res.render('../view/cadUsuarios.html')
})

rota.post('/salvar', (req, res, next) => {
    usuario.nome = req.body.nome
    usuario.email = req.body.email
    usuario.senha = req.body.senha
    usuario.tipo = req.body.tipo
    usuario.sitCadastro = 'A'
    dao.manipUsuarios.insertUsuarios(usuario)
    res.redirect('/')
})

module.exports = rota