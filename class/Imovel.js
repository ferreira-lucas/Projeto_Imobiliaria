class Imoveis{
    constructor(idImo, titulo, descricao, tipo, categoria, endereco, numero, bairro, cidade, pais, cep, preco, situacao, financiado, imovelNomeProp, propNegocia, dataCadastro, dataAtualizacao, auditoria, fotos, idCorr, idProp, sitCadastro){
        this._idImo = idImo
        this._titulo = titulo
        this._descricao = descricao
        this._tipo = tipo
        this._categoria = categoria
        this._endereco = endereco
        this._numero = numero
        this._bairro = bairro
        this._cidade = cidade
        this._pais = pais
        this._cep = cep
        this._preco = preco
        this._situacao = situacao
        this._financiado = financiado
        this._imovelNomeProp = imovelNomeProp
        this._propNegocia = propNegocia
        this._dataCadastro = dataCadastro
        this._dataAtualizacao = dataAtualizacao
        this._auditoria = auditoria
        this._fotos = fotos
        this._idCorr = idCorr
        this._idProp = idProp
        this._sitCadastro = sitCadastro
    }

    set idImo(idImo){
        this._idImo = idImo
    }

    get idImo(){
        return this._idImo
    }

    set titulo(titulo){
        this._titulo = titulo
    }

    get titulo(){
        return this._titulo
    }

    set descricao(descricao){
        this._descricao = descricao
    }

    get descricao(){
        return this._descricao
    }

    set tipo(tipo){
        this._tipo = tipo
    }

    get tipo(){
        return this._tipo
    }

    set categoria(categoria){
        this._categoria = categoria
    }

    get categoria(){
        return this._categoria
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

    set preco(preco){
        this._preco = preco
    }

    get preco(){
        return this._preco
    }

    set situacao(situacao){
        this._situacao = situacao
    }

    get situacao(){
        return this._situacao
    }

    set financiado(financiado){
        this._financiado = financiado
    }

    get financiado(){
        return this._financiado
    }

    set imovelNomeProp(imovelNomeProp){
        this._imovelNomeProp = imovelNomeProp
    }

    get imovelNomeProp(){
        return this._imovelNomeProp
    }

    set propNegocia(propNegocia){
        this._propNegocia = propNegocia
    }

    get propNegocia(){
        return this._propNegocia
    }

    set dataCadastro(dataCadastro){
        this._dataCadastro = dataCadastro
    }

    get dataCadastro(){
        return this._dataCadastro
    }

    set dataAtualizacao(dataAtualizacao){
        this._dataAtualizacao = dataAtualizacao
    }

    get dataAtualizacao(){
        return this._dataAtualizacao
    }

    set auditoria(auditoria){
        this._auditoria = auditoria
    }

    get auditoria(){
        return this._auditoria
    }

    set fotos(fotos){
        this._fotos = fotos
    }

    get fotos(){
        return this._fotos
    }

    set idCorr(idCorr){
        this._idCorr = idCorr
    }

    get idCorr(){
        return this._idCorr
    }

    set idProp(idProp){
        this._idProp = idProp
    }

    get idProp(){
        return this._idProp
    }

    set sitCadastro(sitCadastro){
        this._sitCadastro = sitCadastro
    }

    get sitCadastro(){
        return this._sitCadastro
    }
}

module.exports = Imoveis