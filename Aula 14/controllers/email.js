const express = require("express")

const nodemailer = require("nodemailer")

var configuracoes = nodemailer.createTransport({
    host: "outlook.office365.com",
    port: 587,
    auth: {
        user: "professor.rescobar@outlook.com",
        pass: "Professor001"
    }
})

const esqueciSenha = (email, codigo, nome) => {
    var data = {
        from: {
            "address":"professor.rescobar@outlook.com",
            "name": "Aula de Artin - Escobar"
        },
        to: email,
        subject: "Solicitação de troca de senha",
        html:"Olá " + nome + " vc solicitou a troca da senha, sua chave é:" + codigo
    }

    return data
}

const enviar = async (email, codigo, nome, tipo) => {
    var opcoes
    if (tipo=="esqueciSenha")
        opcoes = esqueciSenha(email, codigo, nome)


    await configuracoes.sendMail(opcoes, (err, info ) => {

    })

}

module.exports = { enviar }
