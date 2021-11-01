class Usuarios{
    constructor(idUser, nome, email, senha, tipo, sitCadastro){
        this._idUser = idUser
        this._nome = nome
        this._email = email
        this._senha = senha
        this._tipo = tipo
        this._sitCadastro = sitCadastro
    }

    set idUser(idUser){
        this._idUser = idUser
    }

    get idUser(){
        return this._idUser
    }

    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return this._nome
    }

    set email(email){
        this._email = email
    }

    get email(){
        return this._email
    }

    set senha(senha){
        this._senha = senha
    }

    get senha(){
        return this._senha
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
}

module.exports = Usuarios