/* A função nativa (método) reduce é utilizada para reduzir um array a um único valor.
Esse valor reduzido pode ser um número, uma string, um array ou um objeto. */

const itemsCarrinho = [
    {id:1, nome:'mouse', qtd:5, valor:10.50},
    {id:2, nome:'teclado', qtd:2, valor:50.00},
    {id:3, nome:'monitor', qtd:1, valor:900.00}
];

function somarValor(total, item){

    const valorTotal = item.qtd * item.valor;
    return total + valorTotal;
}

const totalPagar = itemsCarrinho.reduce(somarValor, 0);

console.log(totalPagar);