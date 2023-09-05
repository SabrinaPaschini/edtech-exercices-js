/*
var xampu = 10.50;
var sabonete= 3.00;

var leite = 3.50;
var agua = 20;

var televisao = 10000;
var sofa = 1200;
var tapete = 1900;

console.log(3*xampu + 10* sabonete + 1 * leite + 2* agua + 1* televisao+2*sofa+1*tapete);

Esse código define preços de produtos para banheiro, cozinha e sala. E depois imprime na saída o preço total da compra considerando as quantidades a serem compradas de cada produto.

Altere o código para que ele imprima 4 números nesta ordem: o custo de comprar somente os produtos do banheiro, o custo de comprar somente os produtos da cozinha, o custo de comprar somente os produtos da sala, e finalmente o custo total de todos os produtos. Organize os cálculos usando novas variáveis para cada cômodo como fizemos em aula.

obs: este exercício lida com números quebrados (não-inteiros), logo pode haver erros de arredondamento. Então a saída do seu programa pode estar ligeiramente diferente do resultado matematicamente exato (exemplo: 1.49999 quando o correto seria 1.5). Isso não é um problema, sua saída será considerada correta nesses casos.

*/


var xampu = 10.50;
var sabonete= 3.00;

var comprasBanheiro = (xampu + sabonete);

console.log("compras banheiro é:"+ comprasBanheiro);

var leite = 3.50;
var agua = 20;

var comprasCozinha = (leite + agua);

console.log("compras cozinha é:"+ comprasCozinha);

var televisao = 1000;
var sofa = 1200;
var tapete = 1900;

var comprasSala = (televisao + sofa + tapete); 

console.log("compras sala é:"+ comprasSala);

console.log("o total de todas as compras juntas é:"+ comprasCozinha+comprasBanheiro+comprasSala);


