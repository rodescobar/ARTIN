var express = require("express")

var app =  express()


//var rotaProdutos = require('./routes/produtos')
//rotaProdutos(app)

require('./routes/produtos')(app)

app.listen(3000)