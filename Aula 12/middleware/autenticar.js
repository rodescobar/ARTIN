const jwt = require("jsonwebtoken")
require("dotenv/config")

module.exports = async (req, res, next) => {
    const token = req.headers.authorization
    
    await jwt.verify( token, process.env.CHAVE_SEGUR, (erro, data) =>{
        if (erro)
            return res.send(erro)

        req.Id = data.userId
        req.nome = data.userNome
    })

    return next()
}