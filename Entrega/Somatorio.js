/*4. Crie uma função que receba um número e devolva uma soma progressiva. 
Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. */

const read = require('readline-sync')

let valor = parseInt(read.question('Digite um valor: '))
let soma = 0
for (soma =0; valor > 0;valor--){
     soma += valor
}
console.log('O valor da soma progressiva é ' + soma)