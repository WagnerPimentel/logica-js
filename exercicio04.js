// Altere o programa anterior para mostrar no final a soma dos números.

let inicio, fim, soma

inicio = 8
fim = 16
soma = 0

while (inicio <= fim) {
    console.log(inicio)
    soma += + inicio
    // soma = soma + inicio
    inicio++
}   


console.log("Soma dos números: " + soma)