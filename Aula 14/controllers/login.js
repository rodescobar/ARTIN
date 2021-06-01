const express = require("express")

const route = express.Router()

const Usuario = require("../models/usuarios")

const Email = require("./email")

const jwt = require("jsonwebtoken")
require("dotenv/config")

route.post("/login", async (req, res) => {
    const { usuario, senha } = req.body

    var dados = await Usuario.findOne({ usuario: usuario })

    console.log("Chegou aqui na validação de usuário")
    if (dados) {
        if (dados.senha === senha) 
        {
        
            const token = await jwt.sign({
                userId: dados._id,
                userNome: dados.nome
            }, process.env.CHAVE_SEGUR, { expiresIn: 86400 } );
        
        
            return res.send({ token })
        }
        else
            return res.send("Senha inválida")
    }

    return res.send("Usuário não encontrado")
})

route.post("/esquecisenha", async (req, res) => {
    const { email } = req.body;

    var retorno = await Usuario.findOne( { email: email })

    if (retorno.email == undefined) {
        res.send("E-mail não encontrado")
        return false
    }

    /*
        var um = Math.floor( Math.random() * 9 )
        var dois = Math.floor( Math.random() * 9 ) 
        var tres = Math.floor( Math.random() * 9 ) 
        var quatro = Math.floor( Math.random() * 9 ) 
        var cinco  = Math.floor( Math.random() * 9 ) 
        var seis = Math.floor( Math.random() * 9 ) 

        res.send(`${um}${dois}${tres} - ${quatro}${cinco}${seis}`)
    */


    var chave = [
        Math.floor( Math.random() * 9 ),
        Math.floor( Math.random() * 9 ),
        Math.floor( Math.random() * 9 ),
        "-",
        Math.floor( Math.random() * 9 ),
        Math.floor( Math.random() * 9 ),
        Math.floor( Math.random() * 9 )
    ]

    var texto = chave.join('')

    
    retorno.chave = texto
    const ret = await Usuario.updateOne({ _id: retorno._id }, { $set: { chave: retorno.chave }})
        
    res.send( "Um e-mail foi enviado para você troca a senha" )


    await Email.enviar(retorno.email, retorno.chave, 
        retorno.nome, "esqueciSenha")
    //npm install --save nodemailer
})


module.exports = app => app.use("", route)

//127.0.0.1:3001/usuarios/lista