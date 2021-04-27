const express = require("express")
const router = express.Router()

const listaProdutos = require("../database/produtos.json")

//middleware
const middleware = require('../middleware/middleware')
router.use(middleware)

router.get("/", (req, res) => {
    res.send(listaProdutos)
})

module.exports = ( app ) => app.use("/produtos", router)