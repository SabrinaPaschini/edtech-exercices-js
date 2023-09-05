/*Calculadora para somar ou subtrair
Desafio ! Vamos partir do seguinte programa (que por enquanto não funciona, por causa dos “???”):

var a = 10; // qualquer número inteiro
var b = 3;  // qualquer número inteiro
var op = 1; // somente 0 ou 1

output(???);
Nele, as variáveis a e b representam números inteiros que queremos somar ou subtrair, e op (abreviação para “operação”) é a variável que configura a operação a ser feita: soma ou subtração. op só pode ser 0 ou 1: 0 significa “somar” e 1 significa “subtrair”.

A ideia é que, se op tiver o valor 1, o programa deve imprimir a subtração entre a e b (ou seja, a - b). Já se op tiver o valor 0, o programa deve imprimir a soma entre a e b (ou seja, a + b).

Seu objetivo é trocar somente os “???” do código por um cálculo envolvendo a , b e op de maneira que, quaisquer que sejam os valores de a, b, e op (este último só pode ser 0 ou 1), o programa sempre vai imprimir no final o resultado correto (soma ou subtração entre a e b , como explicado).*/

var a = 10; // qualquer número inteiro
var b = 3;  // qualquer número inteiro
var op = 1; // somente 0 ou 1

if (op == 0){

    console.log("soma foi iniciada, e seu valor é : " + (a + b) );


}else if (op == 1){

    console.log ("a subtração foi iniciada, e seu valor é : " + (a - b));

}else {
    console.log("o valor de op, não é nem 0 e nem 1 ! ");
}

