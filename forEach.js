const produtos = [
    {id:1, nome:'monitor', preco: 400.00},
    {id:2, nome: 'processador I5', preco: 7.000},
    {id:3, nome:'mouse', preco: 50.00}
];

// function imprimirProduto(produto){
//     console.log(produto.nome);
// }

// produtos.forEach(imprimirProduto);

produtos.forEach((produto)=>{
    console.log(produto.nome);
});