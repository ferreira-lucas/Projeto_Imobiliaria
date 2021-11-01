const Pessoa = require('./Pessoa')

class Clientes extends Pessoa.Pessoa{
    constructor(idCli, nome, cpf, sexo, endereco, numero, bairro, cidade, pais, cep, telefone, email, tipo, sitCadastro, idUser){
        super(nome, cpf, sexo, telefone, email, sitCadastro, idUser)
        this._idCli = idCli
        this._endereco = endereco
        this._numero = numero
        this._bairro = bairro
        this._cidade = cidade
        this._pais = pais
        this._cep = cep
        this._tipo = tipo
    }

    set idCli(idCli){
        this._idCli = idCli
    }

    get idCli(){
        return this._idCli
    }

    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return this._nome
    }

    set cpf(cpf){
        this._cpf = cpf
    }

    get cpf(){
        return this._cpf
    }

    set sexo(sexo){
        this._sexo = sexo
    }

    get sexo(){
        return this._sexo
    }

    set endereco(endereco){
        this._endereco = endereco
    }

    get endereco(){
        return this._endereco
    }

    set numero(numero){
        this._numero = numero
    }

    get numero(){
        return this._numero
    }

    set bairro(bairro){
        this._bairro = bairro
    }

    get bairro(){
        return this._bairro
    }

    set cidade(cidade){
        this._cidade = cidade
    }

    get cidade(){
        return this._cidade
    }

    set pais(pais){
        this._pais = pais
    }

    get pais(){
        return this._pais
    }

    set cep(cep){
        this._cep = cep
    }

    get cep(){
        return this._cep
    }

    set telefone(telefone){
        this._telefone = telefone
    }

    get telefone(){
        return this._telefone
    }

    set email(email){
        this._email = email
    }

    get email(){
        return this._email
    }

    set tipo(tipo){
        this._tipo = tipo
    }

    get tipo(){
        return this._tipo
    }

    set sitCadastro(sitCadastro){
        this._sitCadastro = sitCadastro
    }

    get sitCadastro(){
        return this._sitCadastro
    }

    set idUser(idUser){
        this._idUser = idUser
    }

    get idUser(){
        return this._idUser
    }
}

module.exports = Clientes