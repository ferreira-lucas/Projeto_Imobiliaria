const fs = require('fs')
const express = require('express')
const rota = express.Router()

rota.get('/', (req, res, next) => {
    res.render('../view/index.html')
})

module.exports = rota