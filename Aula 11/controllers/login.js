const express = require("express")

const route = express.Router()

const Usuario = require("../models/usuarios")

const jwt = require("jsonwebtoken")
require("dotenv/config")

route.post("/login", async (req, res) => {
    const { usuario, senha } = req.body

    var dados = await Usuario.findOne({ usuario: usuario })

    if (dados) {
        if (dados.senha === senha) 
        {
        
            const token = jwt.sign({
                userId: dados._id,
                userNome: dados.nome
            }, process.env.SEGUR, { expiresIn: 86400 } );
        
        
            return res.send({ token })
        }
        else
            return res.send("Senha inválida")
    }

    return res.send("Usuário não encontrado")
})

module.exports = app => app.use("", route)

//127.0.0.1:3001/usuarios/lista