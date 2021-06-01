const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Parabéns você chegou até aqui.")
})

//Aberta
require("./controllers/login")(app)

const middleware = require('./middleware/autenticar')
app.use(middleware)

//Fechada
require("./controllers/usuarios")(app)

// 127.0.0.1:3001/teste
// app.post("/teste") 404
app.use((req, res) => {
    res.send("Página não encontrada")
})

app.listen(process.env.PORT || 80, () => {
    console.log("servidor online")
})