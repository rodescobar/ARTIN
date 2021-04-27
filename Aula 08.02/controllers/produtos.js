var _produtos = require('../database/produtos')

const Consulta = ( nome ) => {
    var retorno = _produtos.map( (item) => {
        if (nome == item.nome)
            return item
    })

    return retorno
}

const ConsultaMarca = ( marca ) => {
    var retorno = _produtos.map( (item) => {
        if (marca == item.marca)
            return item
    })

    return retorno
}

module.exports = { Consulta, ConsultaMarca }