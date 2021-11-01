const conexao = require('../connection/conexaoBanco')
const manipUsuarios = {
    insertUsuarios: async function (usuario){//INSERE USUÁRIOS NO DB
        const conn = await conexao.connect()
        const sql = 'INSERT INTO usuarios (idUser, nome, email, senha, tipo, sitCadastro) VALUE (DEFAULT, ?, ?, ?, ?)'
        const values = [usuario.email, usuario.nome, usuario.senha, usuario.tipo, usuario.sitCadastro]
        await conn.query(sql, values)
        console.log("DEGUB: Cadastro efetuado com sucesso!")
    },

    updateUsuarios: async function (idUser, usuario){
        const conn = await conexao.connect()
        const sql = 'UPDATE usuarios SET nome=?, email=?, senha=?, tipo=?, sitCadastro=? WHERE idUser=?'
        const values = [usuario.nome, usuario.email, usuario.senha, usuario.tipo, usuario.sitCadastro,idUser]
        await conn.query(sql, values)
    },

    deleteUsuarios: async function (idUser){
        const conn = await conexao.connect()
        const sql = 'DELETE FROM usuarios WHERE idUser=?'
        await conn.query(sql, idUser)
    },

    selectAllUsuarios: async function(){
        const conn = await conexao.connect()
        const [rows] = await conn.query('SELECT * FROM usuarios')
        return await rows
    },

    selectByIdUsuarios: async function (idUser){
        const conn = await conexao.connect()
        const sql = 'SELECT * FROM usuarios WHERE idUser=?'
        const [rows] = await conn.query(sql, idUser)
        return await rows
    },

    selectByEmailUsuarios: async function (email){
        const conn = await conexao.connect()
        const sql = 'SELECT * FROM usuarios WHERE email=?'
        const [rows] = await conn.query(sql, email)
        return await rows
    }
}

module.exports = {manipUsuarios}