const jwt = require("jsonwebtoken")
require("dotenv/config")

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    
    jwt.verify( token, process.env.SEGUR, (erro, data) =>{
        if (erro)
            return res.send(erro)

        req.Id = data.userId
        req.nome = data.userNome
    })

    return next()
}