// Imprimir os primeiros 10 números da sequência de Fibonacci.

let n1 = 0;
let n2 = 1;

console.log (n1)
console.log (n2)

for (let cont =1; cont <=8; cont++){
    res= n1 + n2;
    n1=n2;
    n2=res;

    console.log (res);
}