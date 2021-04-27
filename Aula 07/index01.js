
var http = require("http")

var server = http.createServer(function(req, res) {

    console.log(req.url)

    res.writeHead(200, { "Content-Type": "text/html" })
    res.end("<marquee>Teste</marquee>")
})

server.listen(8080)