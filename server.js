const app = require('./aplicacao')
const connection = require('./connection/conexaoBanco')

app.listen(3000, () => {
    console.log('Servidor iniciou: http://localhost:3000')
})

connection.connect()