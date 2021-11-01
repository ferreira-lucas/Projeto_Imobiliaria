const conexao = require('../connection/conexaoBanco')
const manipImoveis = {
    insertImoveis: async function (imovel){
        const conn = await conexao.connect()
        const sql = 'INSERT INTO imoveis (idImo, titulo, descricao, tipo, categoria, endereco, numero, bairro, cidade, pais, cep, preco, situacao, financiado, imovelNomeProp, propNegocia, dataCadastro, dataAtualizacao, auditoria, fotos, idCorr, idProp, sitCadastro) VALUE (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const values = [imovel.titulo, imovel.descricao, imovel.tipo, imovel.categoria, imovel.endereco, imovel.numero, imovel.bairro, imovel.cidade, imovel.pais, imovel.cep, imovel.preco, imovel.situacao, imovel.financiado, imovel.imovelNomeProp, imovel.propNegocia, imovel.dataCadastro, imovel.dataAtualizacao, imovel.auditoria, imovel.fotos, imovel.idCorr, imovel.idProp, imovel.sitCadastro]
        await conn.query(sql, values)
        console.log("DEBUG: Cadastro efetuado com sucesso!")
    },

    updateImoveis: async function (idImo, imovel){
        const conn = await conexao.connect()
        const sql = 'UPDATE imoveis SET titulo=?, descricao=?, tipo=?, categoria=?, endereco=?, numero=?, bairro=?, cidade=?, pais=?, cep=?, preco=?, situacao=?, financiado=?, imovelNomeProp=?, propNegocia=?, dataCadastro=?, dataAtualizacao=?, auditoria=?, fotos=?, idCorr=?, idProp=?, sitCadastro=? WHERE idImo=?'
        const values = [imovel.titulo, imovel.descricao, imovel.tipo, imovel.categoria, imovel.endereco, imovel.numero, imovel.bairro, imovel.cidade, imovel.pais, imovel.cep, imovel.preco, imovel.situacao, imovel.financiado, imovel.imovelNomeProp, imovel.propNegocia, imovel.dataCadastro, imovel.dataAtualizacao, imovel.auditoria, imovel.fotos, imovel.idCorr, imovel.idProp, imovel.sitCadastro, idImo]
        await conn.query(sql, values)
    },

    deleteImoveis: async function (idImo){
        const conn = await conexao.connect()
        const sql = 'DELETE FROM imoveis WHERE idImo=?'
        await conn.query(sql, idImo)
    },

    selectAllImoveis: async function(){
        const conn = await conexao.connect()
        const [rows] = await conn.query('SELECT * FROM imoveis')
        return await rows
    },

    selectByIdImoveis: async function(idImo){
        const conn = await conexao.connect()
        const sql = 'SELECT * FROM imoveis WHERE idImo=?'
        const [rows] = await conn.query(sql, idImo)
        return await rows
    }
}

module.exports = {manipImoveis}