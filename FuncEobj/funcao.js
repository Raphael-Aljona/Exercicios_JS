// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possivel executar 6 dos exercicios anteriores
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções
// O usuario poderá escolher qual exercicio ele quer executar

// O usuario deverá digitar 0 para sair do menu

let menu;

function Exemplo1 (){
    for (let cont=1; cont<=10; cont++){

        console.log (cont)
    
    }
}

function Exemplo2 () {
    for (let pares =2; pares <=10; pares+=2){
        console.log (pares)
    }
}

function Exemplo3 () {
    for (let impares=1; impares <=50; impares+=2){
        console.log (impares)
    }
}

function Exemplo4 (){
    let soma = 0
    let n1 = 1

    while (n1 <= 100) {
    console.log (soma = soma + n1)
    n1 ++;
    }
}

function Exemplo5 (){
    let usuario = parseInt (prompt ("Digite um número inteiro: "))

    while (usuario >= 1) {
    console.log (usuario)
    usuario --;
}
}

function Exemplo6 (){
    let num = 0

while (num < 20) {
    num += 2;

    console.log (num);
}
}

do{
    menu = prompt("Escolha uma opção: \n 1 - Exemplo, Imprimir números de 1 a 10 (for) \n 2 - Exemplo, Imprimir números pares de 1 a 10. (for) \n 3 - Exemplo, Imprima os números ímpares de 0 a 50  (for) \n 4 - Exemplo, Calcular a soma dos números de 1 a 100 (While) \n 5 - Exemplo, Contagem regressiva até 0 (While) \n 6 - Exemplo, Imprimir números pares de 0 a 20 (While)\n 0 - Para fechar o menu")
    
    switch (menu) {
        case "1":
            Exemplo1 ()
            break;
        case "2":
            Exemplo2 ()
            break;
        case "3":
            Exemplo3 ()
            break;
        case "4":
            Exemplo4 ()
            break;
        case "5":
            Exemplo5 ()
            break;
        case "6":
            Exemplo6 ()
            break;
}}
while (menu != "0")
