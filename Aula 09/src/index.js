const express = require('express')
const app = express()
var cors = require('cors');

app.use(express.json())

app.use(cors())

//Importar nossos controllers
require("../controller/login")(app)
require("../controller/produtos")(app)

app.listen(3001, () => {
    console.log("servidor online")
})