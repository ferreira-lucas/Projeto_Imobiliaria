const conexao = require('../connection/conexaoBanco')
const manipClientes = {
    insertClientes: async function (cliente){
        const conn = await conexao.connect()
        const sql = 'INSERT INTO clientes (idCli, nome, cpf, sexo, endereco, numero, bairro, cidade, pais, cep, telefone, email, tipo, sitCadastro, idUser) VALUE (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const values = [cliente.idCli, cliente.nome, cliente.cpf, cliente.sexo, cliente.endereco, cliente.numero, cliente.bairro, cliente.cidade, cliente.pais, cliente.cep, cliente.telefone, cliente.email, cliente.tipo, cliente.sitCadastro, cliente.idUser]
        await conn.query(sql, values)
        console.log("DEBUG: Cadastro efetuado com sucesso!")
    },

    updateClientes: async function (idCli, cliente){
        const conn = await conexao.connect()
        const sql = 'UPDATE clientes SET nome=?, cpf=?, sexo=?, endereco=?, numero=?, bairro=?, cidade=?, pais=?, cep=?, telefone=?, email=?, tipo=?, sitCadastro=?, idUser=? WHERE idCli=?'
        const values = [cliente.nome, cliente.cpf, cliente.sexo, cliente.endereco, cliente.numero, cliente.bairro, cliente.cidade, cliente.pais, cliente.cep, cliente.telefone, cliente.email, cliente.tipo, cliente.sitCadastro, cliente.idUser, idCli]
        await conn.query(sql, values)
    },

    deleteClientes: async function (idCli){
        const conn = await conexao.connect()
        const sql = 'DELETE FROM clientes WHERE idCli=?'
        await conn.query(sql, idCli)
    },

    selectAllClientes: async function(){
        const conn = await conexao.connect()
        const [rows] = await conn.query('SELECT * FROM clientes')
        return await rows
    },

    selectByIdClientes: async function (idCli){
        const conn = await conexao.connect()
        const sql = 'SELECT * FROM clientes WHERE idCli=?'
        const [rows] = await conn.query(sql, idCli)
        return await rows
    }
}

module.exports = {manipClientes}