/* 4. Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro"*/

const read = require('readline-sync')


let valor1 = parseFloat(read.question('Digite um numero?'))
let valor2 = parseFloat(read.question('Digite um numero?'))
let valor3 = parseFloat(read.question('Digite um numero?'))

let solucao = analiseDoValor(valor1, valor2, valor3)

console.log(solucao)

function analiseDoValor(valor1, valor2, valor3) {
    if (!valor1 && !valor2 && !valor3) {
        return "Não recebeu nenhum parâmetro"
    }
    else if (valor1 && valor2 && valor3) {
        tresValor = (valor1 + valor2) / valor3
        return tresValor
    }
    else if (!valor1 && !valor2 && valor3) {
        return valor3
    }
    else if (!valor1 && valor2 && !valor3) {
        return valor2
    }
    else if (valor1 && !valor2 && !valor3) {
        return valor1
    }
    else if(valor1 && valor2 && !valor3){
        return valor1+valor2
    }
    else if(valor1 && !valor2 && valor3){
        return valor1+valor3
    }
    else if(!valor1 && valor2 && valor3){
        return valor2+valor3
    }
}

