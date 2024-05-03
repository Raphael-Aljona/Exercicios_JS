// Exercício 8: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let peso = parseFloat(prompt("Digite quantos KG você pesa (ex: 70)"))
let altura = parseFloat(prompt("Digite quanto metros vc tem de altura (ex: 1.72)"))

let IMC = peso / (altura * altura)

if (IMC < 18.5) {
    console.log("Abaixo do peso")
} else if (IMC < 24.9) {
    console.log("Peso normal")
} else if (IMC < 29.9) {
    console.log("Sobrepeso")
} else if (IMC < 34.9) {
    console.log("Obesidade grau 1")
} else if (IMC < 39.9) {
    console.log("Obesidade grau 2")
} else if (IMC >= 40.0) {
    console.log("Obesidade grau 3")
} else {
    console.log("O valor inserido é invalido")
}