// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada.

let comeco, fim, multiplicacao

numero = 9
multiplicador = 1
multiplicacao = 0


while (multiplicador <= 10){
    multiplicacao = numero * multiplicador
    console.log(numero + " X " + multiplicador + " = " + multiplicacao)
    multiplicador++
}

/*
let tabuada = 3
let i = 1

while(i<=10){
    console.log(tabuada + "X" + i + "=" + tabuada*i)
    i++
}
*/
