// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let username = prompt("Digite um nome de usuário:")
let senha = prompt("Digite a senha:")

// == -> Verifica se um valor é igual a outro
// === -> Verifica se o valor e o tipo dos itens são iguais
if (username == "admin") {
    console.log("Você é admin");

    if (senha === "senha123") {
        console.log("Bem vindo ADMIN!");
    }
    
} else {
    console.log ("Você não tem permissão de acesso!")
}