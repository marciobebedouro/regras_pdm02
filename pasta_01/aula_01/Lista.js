//antigamente
var listaAntiga = Array();

//novo
let lista = [];
console.log(lista);

//Adicionando  um item

lista.push('Carvão');
lista.push('Carne');
lista.push('Refrigerante');
lista.push(10);

console.log(lista);

//Que todo array começa com zero;

console.log(lista[0]);

//O pop sempre remove o último item da lista
console.log(lista.pop());
console.log(lista);

//Remover item específico
//1º parametro começa
//2º parametro deletar itens
//3º parametro adiciona itens
console.log(lista.splice(0,1));

//filtrando informações
console.log('Utilizando Filter');
console.log(lista.filter(e => e === 'Carne'));

//Buscando informação
console.log('utilizando Find');
console.log(lista.find(v => v==='Carne'));

//adicionar item em posição específica

console.log(lista.splice(0,0,'elemento'));

//verificar tamanho da lista
console.log('Tamanho da Lista');
console.log(lista.length);


let numeros =[1,2,3,4,5,6,7,8,9,10];
const resultado = numeros.map(Math.sqrt);
console.log('Utilizando raiz quadrada');
console.log(resultado);