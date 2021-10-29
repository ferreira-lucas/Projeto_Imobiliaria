const conexao = require('../connection/ConexaoBanco')
const manipCorretores = {
    insertCorretores: async function (corretor){//INSERE CORRETORES NO DB
        const conn = await conexao.connect()
        const sql = 'INSERT INTO corretores (idCorr, nome, cpf, sexo, telefone, email, creci, sitCadastro) VALUE (DEFAULT, ?, ?, ?, ?, ?, ?, ?)'
        const values = [corretor.nome, corretor.cpf, corretor.sexo, corretor.telefone, corretor.email, corretor.creci, corretor.sitCadastro]
        await conn.query(sql, values)
        console.log("DEBUG: Cadastro efetuado com sucesso!")
    },
    
    updateCorretores: async function (idCorr, corretor){
        const conn = await conexao.connect()
        const sql = 'UPDATE corretores SET nome=?, cpf=?, sexo=?, telefone=?, email=?, creci=?, sitCadastro=? WHERE idCorr=?'
        const values = [corretor.nome, corretor.cpf, corretor.sexo, corretor.telefone, corretor.email, corretor.creci, idCorr]
        await conn.query(sql, values)
    },
    
    deleteCorretores: async function (idCorr){
        const conn = await conexao.connect()
        const sql = 'DELETE FROM corretores WHERE idCorr=?'
        await conn.query(sql, idCorr)
    },
    
    selectAllCorretores: async function (){
        const conn = await conexao.connect()
        const [rows] = await conn.query('SELECT * FROM corretores;')
        return await rows
    },
    
    selectByIdCorretores: async function (idCorr){
        const conn = await conexao.connect()
        const sql = 'SELECT FROM corretores WHERE idCorr=?;'
        const [rows] = await conn.query(sql, idCorr)
        return await rows
    }
}


module.exports = {manipCorretores}