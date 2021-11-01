class Pessoa {
    constructor(nome, cpf, sexo, telefone, email, sitCadastro, idUser){
        this._nome = nome
        this._cpf = cpf
        this._sexo = sexo
        this._telefone = telefone
        this._email = email
        this._sitCadastro = sitCadastro
        this._idUser = idUser
    }
}

module.exports = {Pessoa}