var resultado = 0

const Multiplicacao = (num1, num2) => {
    return num1 * num2
}

const Divisao = (num1, num2) => {
    resultado = num1 / num2
}

resultado = Multiplicacao(2, 6)
console.log(resultado)

Divisao(50, 4)
console.log(resultado)