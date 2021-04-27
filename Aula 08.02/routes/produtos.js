var controller = require('../controllers/produtos')

module.exports = ( parametro ) => {

    parametro.get("/produtos", (req, res) => {
        var dados = req.query
        //dados.nome
        var resposta = controller.Consulta( dados.nome )

        res.send( resposta )
    })

    parametro.post("/produtos", (req, res) => {
        var dados = req.query
        //dados.nome
        var resposta = controller.Consulta( dados.marca )

        res.send( resposta )
    })

    parametro.put("/produtos", (req, res) => {
        res.send("Método POST em produtos")
    })

    parametro.delete("/produtos", (req, res) => {
        res.send("Método POST em produtos")
    })
    
}

