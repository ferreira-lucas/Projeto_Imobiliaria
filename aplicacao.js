const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

const rotaIndex = require('./rotas/rotaIndex')
const rotaCadCorretores = require('./rotas/rotaCadCorretores')

app.use('/', rotaIndex)
app.use('/corretores/cadastro', rotaCadCorretores)

app.use((req, res, next) => {
    res.status(404).send({
        mensagem: 'Rota não encontrada!'
    })
})

module.exports = app