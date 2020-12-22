//Filter retorna um novo array que atenda há uma condição pré estabelecida

const produtos = [
    {id:1, nome:'monitor', ativo:false},
    {id:2, nome:'teclado', ativo:true},
    {id:3, nome:'mouse', ativo:true},
    {id:4, nome:'kindle', ativo:false}    
];

function retornarProdutosAtivos(produto){

    return produto.ativo == true;
}

const produtosAtivos = produtos.filter(retornarProdutosAtivos);

console.log(produtosAtivos);