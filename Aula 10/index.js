const express = require("express")
var app = express()

app.use(express.json())

require("./controllers/usuarios")(app)

app.listen(3001, () => {
    console.log("servidor online")
})