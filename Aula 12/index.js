const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Parabéns você chegou até aqui.")
})

//Postman
//professor-AbortSignal.herokuapp.com/login

//Aberta
require("./controllers/login")(app)

//const middleware = require('./middleware/autenticar')
//app.use(middleware)

//Fechada
require("./controllers/usuarios")(app)

app.listen(process.env.PORT || 80, () => {
    console.log("servidor online")
})