/*Investimento
O código abaixo simula uma aplicação financeira: a pessoa investe R$ 10 mil, daí ganha 20% de rendimento sobre o valor investido, depois precisa pagar em imposto 30% do rendimento obtido. O programa imprime o montante de dinheiro que a pessoa tem ao final do investimento:

output(10000 + 10000 * 0.2 - 10000 * 0.2 * 0.3);
Da maneira como o código está, não é tão claro o que cada número representa e porque existem aquelas operações de soma, multiplicação e subtração. Altere esse código para ficar bem organizado: crie uma variável para cada número que aparece (com a intenção de descrever o que aquele número representa), e também variáveis para representar o rendimento ganho, o imposto pago, e o montante final.

obs: este exercício lida com números quebrados (não-inteiros), logo pode haver erros de arredondamento. Então a saída do seu programa pode estar ligeiramente diferente do resultado matematicamente exato (exemplo: 1.49999 quando o correto seria 1.5). Isso não é um problema, sua saída será considerada correta nesses casos.
*/


let investimentoInicial = 10000

let rendimento = 0.2

let imposto = 0.3

let valorDoLucrode20 =  rendimento* investimentoInicial

//nova variavel com o valor do lucro do investimento

let lucroInvestimento = valorDoLucrode20

let retiradaImposto = imposto * lucroInvestimento

console.log ("valor investido:" + investimentoInicial)

console.log("investimento Com Rendimentos De 20% de 10.000 é : " + valorDoLucrode20);

console.log("valor de 30% sobre lucro é : " + retiradaImposto);

console.log("lucro total sobre investimento é : " + investimentoInicial - retiradaImposto);

console.log("esse é o valor do investimento inicial " + (investimentoInicial + valorDoLucrode20 -retiradaImposto))




