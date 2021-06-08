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
        html: `
            <html>
            <head>
                <style>
                    .assinatura {
                        color: purple;
                        background-color: khaki;
                    }
        
                    .botao {
                        text-decoration: none;
                        border: 1px solid #ccc;
                        border-top: none;
                        border-left: none;
                        padding: 10px;
                        border-radius: 20px;
                        background-color: lightcoral;
                    }
        
                    .botao:hover {
                        text-decoration: none;
                        border: 1px solid #ccc;
                        border-bottom: none;
                        border-right: none;
                        padding: 10px;
                        border-radius: 20px;
                        background-color: tomato;
                    }
        
                </style>
            </head>
            <body>
                <h2>Olá ${ nome }</h2>
                <p>Recebemos a solicitação de troca de sua senha.</p>
                <p>Caso não tenha sido você que solicitou a troca, por favor ignore este e-mail.</p>
                <p>Se você solicitou a troca, anote seu código ${ codigo } e clique no botão abaixo para efetuar a troca.</p>
                <br>
                <a href="http://ite.edu.br" class="botao">CLIQUE AQUI</a>
                <br>
                <br>
                <div class="assinatura">
                    Atenciosamente Aula de Artin
                </div>
            </body>
        </html>        
        `
    }

    return data
}

const senhaAlterada = (email, nome ) => {
    var data = {
        from: {
            "address":"professor.rescobar@outlook.com",
            "name": "Aula de Artin - Escobar"
        },
        to: email,
        subject: "Confirmação de troca de senha",
        html: `
            Olá ${ nome }<br>
            Sua senha foi alterada com sucesso.
        `
    }

    return data
}

const enviar = async (email, codigo, nome, tipo) => {
    var opcoes

    console.log(email, codigo, nome, tipo)


    if (tipo=="esqueciSenha")
        opcoes = esqueciSenha(email, codigo, nome)

    if ( tipo=="senhaAlterada" )
        opcoes = senhaAlterada(email, nome)


    await configuracoes.sendMail(opcoes, (err, info ) => {

    })

}

module.exports = { enviar }
