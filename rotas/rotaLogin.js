const express = require('express')
const sessions = require('express-session')
const dao = require('../dao/UsuariosDAO')
const usuario = require('../class/Usuario')
const rota = express.Router()

rota.get('/', (req, res, next) => {
    res.render('../view/login.html')
})

rota.post('/logar', (req, res, next) => {
    async function retorno(){
        const usuario = await dao.manipUsuarios.selectByEmailUsuarios(req.body.emailLogin)
        if(usuario != undefined && usuario[0].senha == req.body.senhaLogin){
            sessions.login = usuario[0]
            if(usuario[0].tipo == 'Corretor'){
                res.redirect('/dashboard')
            }else if(usuario[0].tipo == 'Cliente'){
                res.redirect('/')
            }
        }else{
            console.log('Usuário ou senha inválidos!')
            res.redirect('/login')
        }
    } 
    retorno()
})

rota.post('/registrar', (req, res, next) => {
    /*usuario.nome = req.body.nome
    usuario.email = req.body.email
    usuario.senha = req.body.senha
    usuario.tipo = 'Cliente'
    usuario.sitCadastro = 'A'*/
    //dao.manipUsuarios.insertUsuarios(usuario)
    res.redirect('/clientes/cadastro')
})

module.exports = rota, sessions