const express = require('express')
const rota = express.Router()
const dao = require('../dao/ClientesDAO.js')
const cliente = require('../class/Cliente.js')

rota.get('/', (req, res, next) => {
    res.render('../views/cadClientes.html')
    /*var nome = document.getElementsByName("nome")
    nome.readOnly = true*/
})

rota.post('/salvar', (req, res, next) => {
    cliente.nome = req.body.nome
    cliente.cpf = req.body.cpf
    cliente.sexo = req.body.sexo
    cliente.endereco = req.body.endereco
    cliente.numero = req.body.numero
    cliente.bairro = req.body.bairro
    cliente.cidade = req.body.cidade
    cliente.pais = req.body.pais
    cliente.cep = req.body.cep
    cliente.telefone = req.body.telefone
    cliente.email = req.body.email
    cliente.tipo = req.body.tipo
    cliente.sitCadastro = 'A'
    cliente.idUser = req.body.idUser
    dao.manipClientes.insertClientes(cliente)
    res.redirect('/')
})

module.exports = rota