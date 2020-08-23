/*1. Faça um programa que receba uma temperatura em Celsius e chame uma 
função que converta para Fahrenheit. F = 9*C/5 + 32*/

const read = require('readline-sync')

let celsius = parseFloat(read.question('Digite uma temperatura: '))


function ConverterCelsiusFar(temperatura)
{
    return 9*temperatura/5 +32
}

console.log("Temperatura em Fahrenheit é " + ConverterCelsiusFar(celsius))