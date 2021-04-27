//criar variavel http recebendo a biblioteca http 
//podendo assim tranformar a aplicação em um servidor web
var http = require("http")

//criando variavel server, que sera um servidor web e receberá sempre
//uma requisição e retornará sempre uma respota
var server = http.createServer((requisicao, resposta) => {
    resposta.end("Você chegou no servidor")
})

//servidor funcionando na porta 8080
//localhost:8080
server.listen(8080)