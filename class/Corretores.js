const Pessoa = require('./Pessoa.js')

class Corretores extends Pessoa.Pessoa{
    constructor(idCorr, nome, cpf, sexo, telefone, email, creci, sitCadastro, senha){
        super(nome, cpf, sexo, telefone, email, sitCadastro, senha)
        this._idCorr = idCorr
        this._creci = creci
        this._sitCadastro = sitCadastro
    }

    set idCorr(idCorr){
        this._idCorr = idCorr
    }

    get idCorr(){
        return this._idCorr
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

    set creci(creci){
        this._creci = creci
    }

    get creci(){
        return this._creci
    }

    set sitCadastro(sitCadastro){
        this._sitCadastro = sitCadastro
    }

    get sitCadastro(){
        return this._sitCadastro
    }

    set senha(senha){
        this._senha = senha
    }

    get senha(){
        return this._senha
    }
}

const corr = new Corretores()
corr.nome = 'Lucas Ferreira'
corr.creci = '1234abcd'
console.log(corr)