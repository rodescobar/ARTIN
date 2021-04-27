var http = require("http")

var produtos = "Lista de produtos"

var clientes = "Lista de clientes"

var server = http.createServer((requisicao, resposta) => {
    
    if (requisicao.url == "/produtos")
        resposta.end(produtos)
    else if (requisicao.url == "/clientes")
        resposta.end(clientes)
    else
        resposta.end("Não encontrado")
})

server.listen(8080)

//Browser e o meu servidor é o meu próprio micro
//localhost:8080
//127.0.0.1:8080