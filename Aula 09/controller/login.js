const express = require("express")

const router = express.Router()

router.post("/login", (req, res) => {
    console.log(req.body)

    /*
    const usuario = req.body.usuario
    const senha = req.body.senha
    */
   const { usuario, senha } = req.body
    
    if (usuario != "teste" )
        return res.status(400).send({ erro: "Usuário inválido." })

    if ( senha != "123456")
        return res.status(400).send({ erro: "Senha inválida."})

    return res.send("OK")
})

module.exports = app => app.use("/seguro", router)