const express = require('express')
const app = express()
var cors = require('cors');

app.use(express.json())

//Importar nossos controllers
require("../controller/login")(app)
require("../controller/produtos")(app)

app.use(cors())

app.listen(3001, () => {
    console.log("servidor online")
})