//Função nativa MAP, cria um array a partir de outro mas com valores alterados.

const produto = [
    {id:1, nome:"monitor", preco:5.000},
    {id:2, nome:"roteador", preco:150.00},
    {id:3, nome:"kindle", preco:370.00}
];

function retornaProduto(produto){
    return (`Produto: ${produto.nome}, Preco: ${produto.preco}`);
}

const descProduto = produto.map(retornaProduto);

console.log(descProduto);
