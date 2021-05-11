const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

//Aberta
require("./controllers/login")(app)

const middleware = require('./middleware/autenticar')
app.use(middleware)

//Fechada
require("./controllers/usuarios")(app)

app.listen(3001, () => {
    console.log("servidor online")
})