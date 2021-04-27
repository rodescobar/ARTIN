var variavel = "Texto"

variavel = 1

variavel = 0.6

console.log(variavel)

let outra_variavel = "Ola mundo"

if (variavel == 0.6) {
    outra_variavel = 80
    variavel = 10
}

console.log(outra_variavel)
console.log(variavel)

function Soma() {
    variavel = variavel * 5
    outra_variavel = outra_variavel / 10
    console.log(variavel)
    console.log(outra_variavel)
}

Soma()