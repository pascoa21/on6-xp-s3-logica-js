/* 2. Agora faça o contrário, um programa que receba uma temperatura
em Fahrenheit e chame uma função que converta para Celsius.*/

const read = require('readline-sync')

let fahrenheit = parseFloat(read.question('Digite uma temperatura: '))


function ConverterFarCelsius(temperatura)
{
    return (temperatura - 32)*5/9
}

console.log("Temperatura em Celsius é " + ConverterFarCelsius(fahrenheit))