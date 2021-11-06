const express = require('express')
const rota = express.Router()
const dao = require('../dao/ImoveisDAO.js')
const imovel = require('../class/Imovel.js')

rota.get('/', (req, res, next) => {
    res.render('../views/cadImoveis.html')
})

rota.post('/salvar', (req, res, next) => {
    imovel.titulo = req.body.titulo
    imovel.descricao = req.body.descricao
    imovel.tipo = req.body.tipo
    imovel.categoria = req.body.categoria
    imovel.endereco = req.body.endereco
    imovel.numero = req.body.numero
    imovel.bairro = req.body.bairro
    imovel.cidade = req.body.cidade
    imovel.pais = req.body.pais
    imovel.cep = req.body.cep
    imovel.preco = req.body.preco
    imovel.situacao = req.body.situacao
    imovel.financiado = req.body.financiado
    imovel.imovelNomeProp = req.body.imovelNomeProp
    imovel.propNegocia = req.body.propNegocia
    imovel.dataCadastro = req.body.dataCadastro
    imovel.dataAtualizacao = req.body.dataCadastro//Na inclusão, é a mesma data do cadastro
    imovel.auditoria = 'Cadastro realizado por'//COLOCAR USUÁRIO
    imovel.fotos = req.body.fotos
    imovel.idCorr = req.body.idCorr
    imovel.idProp = req.body.idProp
    imovel.sitCadastro = 'A'
    dao.manipImoveis.insertImoveis(imovel)
    res.redirect('/')
})

module.exports = rota