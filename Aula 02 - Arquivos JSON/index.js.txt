
$(document).ready(function() {
    json.map( (item) => {
        var div = $('.aula02')

        if (item.cliente) {
            div.append(`<h1>Nome: ${item.cliente}<h2>`)
        }

        if (item.endereco != undefined) {
            div.append(`<h2>Endereço: ${item.endereco}<h2>`)
        }

        if (item.documentos) {
            item.documentos.map( (linha) => {
                div.append(`<p><span>${linha.tipo}:</span>${linha.numero}</p>`)
            })
        }

        if (item.filhos) {
            item.filhos.map( (linha) => {
                div.append(`<p style="background: #ccc"><span>${linha.nome}:</span>${linha.nome}<br><span>Idade: </span>${linha.idade}</p>`)
            })
        }

        if (item.informacoes) {
            item.informacoes.map( (inf) => {
                div.append("<h3 style='background: tomato'>Informações</h3>")
                div.append(`<p><span>Data: </span>${inf.data} - `)
                div.append(`${inf.descricao}<p>`)
            })
        }

        div.append("<hr>")
    })
})