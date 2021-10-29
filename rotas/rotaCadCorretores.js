const fs = require('fs')
const express = require('express')
const rota = express.Router()
const dao = require('../dao/CorretoresDAO.js')

rota.get('/', (req, res, next) => {
    res.render('../view/cadCorretores.html')
})

rota.post('/salvar', (req, res, next) => {
    var sexo;
    if(req.body.sexo == "Masculino"){
        console.log('É masculino')
        sexo = 'M'
    }else if(req.body.sexo == "Feminino"){
        sexo = 'F'
    }
const corretor = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        sexo: sexo,
        telefone: req.body.telefone,
        email: req.body.email,
        creci: req.body.creci,
        sitCadastro: 'A'
    }
    //console.log(corretor)
    dao.manipCorretores.insertCorretores(corretor)
    res.redirect('/')
})

module.exports = rota