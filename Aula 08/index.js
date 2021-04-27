var express = require('express')
var app = express()

//Importar json com os produtos
var _produtos = require('./produtos.json')

app.get("/", (req, res) => {
    var dados = req.query

    var resposta = _produtos.map( (item) => {
        if ( item.nome == dados.nome ) {
            return item
        }
    })

    res.send( resposta )
})

app.put("/produtos", (req, res) => {
    res.json(_produtos)
})

app.listen(3000, () => {
    console.log("servidor online")
})