class Pessoa {
    constructor(nome, cpf, sexo, telefone, email, sitCadastro, senha){
        this._nome = nome
        this._cpf = cpf
        this._sexo = sexo
        this._telefone = telefone
        this._email = email
        this._sitCadastro = sitCadastro
        this._senha = senha
    }

    set nome(nome){
        this._nome = nome
    }
    
    get nome(){
        return this._nome
    }
}

module.exports = {Pessoa}