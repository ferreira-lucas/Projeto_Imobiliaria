const express = require('express')
const rota = express.Router()
const dao = require('../dao/CorretoresDAO.js')
const corretor = require('../class/Corretor.js')

rota.get('/', (req, res, next) => {
    res.render('../view/cadCorretores.html')
})

rota.post('/salvar', (req, res, next) => {
    corretor.nome = req.body.nome
    corretor.cpf = req.body.cpf
    corretor.sexo = req.body.sexo
    corretor.telefone = req.body.telefone
    corretor.email = req.body.email
    corretor.creci = req.body.creci
    corretor.sitCadastro = 'A'
    corretor.idUser = req.body.idUser
    dao.manipCorretores.insertCorretores(corretor)
    res.redirect('/')
})

module.exports = rota