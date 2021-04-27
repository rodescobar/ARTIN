var express = require("express")
var app = express()

app.get("/", function(req, res) {
    res.send("Você está usando get")
})

app.post("/produtos", function(req, res) {
    res.send("Você chegou no post de produtos")
})

app.listen(8080, function() {
    console.log("servidor online")
})