
const diasDaSemana = [
    'domingo',
    'segunda'
];

//Adicionando items no final do array com push
diasDaSemana.push('Terça');
diasDaSemana.push('Quarta');

//Removendo items com splice
diasDaSemana.splice(0,1);

//Removendo a primeira posicao com shift
diasDaSemana.shift();

//Removendo a ultima posicao com pop
diasDaSemana.pop();

console.log(diasDaSemana);