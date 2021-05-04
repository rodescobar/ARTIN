const express = require("express")

const route = express.Router()

const Usuario = require("../models/usuarios")

route.get("/lista", async (req, res) => {
    var lista = await Usuario.find()
    return res.send(lista)
})

route.post("/criar", async (req, res) => {

    await Usuario.create(req.body, (err, ret) => {
        if (err)
            return res.send(err.message)

        return res.send(ret)
    })

    //return res.send( usuario )
})

route.post("/login", async (req, res) => {
    const { usuario, senha } = req.body

    var dados = await Usuario.findOne({ usuario: usuario })

    if (dados) {
        console.log(dados)
        if (dados.senha === senha)
            return res.send("Usuário Autenticado")
        else
            return res.send("Senha inválida")
    }

    return res.send("Usuário não encontrado")
})

module.exports = app => app.use("/usuarios", route)

//127.0.0.1:3001/usuarios/lista