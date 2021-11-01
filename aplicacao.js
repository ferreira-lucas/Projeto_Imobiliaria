const express = require('express')
const sessions = require('express-session')
const cookieParser = require('cookie-parser');
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))
app.use(cookieParser())
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

const rotaIndex = require('./rotas/rotaIndex')
const rotaLogin = require('./rotas/rotaLogin')
const rotaDashboard = require('./rotas/rotaDashboard')
const rotaCadCorretores = require('./rotas/rotaCadCorretores')
const rotaCadUsuarios = require('./rotas/rotaCadUsuarios')
const rotaCadClientes = require('./rotas/rotaCadClientes')
const rotaCadImoveis = require('./rotas/rotaCadImoveis')

app.use('/', rotaIndex)
app.use('/login', rotaLogin)
app.use('/dashboard', rotaDashboard)
app.use('/corretores/cadastro', rotaCadCorretores)
app.use('/usuarios/cadastro', rotaCadUsuarios)
app.use('/clientes/cadastro', rotaCadClientes)
app.use('/imoveis/cadastro', rotaCadImoveis)

app.use((req, res, next) => {
    res.status(404).send({
        mensagem: 'Rota não encontrada!'
    })
})

module.exports = app