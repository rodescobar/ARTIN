const express = require('express')
const app = express()

app.use(express.json())

//Importar nossos controllers
require("../controller/login")(app)
require("../controller/produtos")(app)

app.listen(3000, () => {
    console.log("servidor online")
})