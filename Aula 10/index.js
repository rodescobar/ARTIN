const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

require("./controllers/usuarios")(app)

app.listen(3001, () => {
    console.log("servidor online")
})