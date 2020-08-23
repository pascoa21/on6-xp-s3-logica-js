//3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const read = require('readline-sync')

console.log('Conversor de Medida')

let medida = parseFloat(read.question('Digite uma medida em metros: '))


function ConversorMedida(metros)
{
    return metros*1000
}

console.log('A medida em milimetros é '+ ConversorMedida(medida))