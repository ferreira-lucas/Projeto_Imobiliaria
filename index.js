(async () => {
    const conexao = require('./connection/conexaoBanco.js')
    const corretoresDAO = require('./dao/CorretoresDAO')
    const corretores = await corretoresDAO.manipCorretores.selectAllCorretores()
    console.log(corretores)
})();



