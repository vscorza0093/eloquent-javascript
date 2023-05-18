
/*
Escreva a função arrayToList que constrói uma estrutura de dados similar à estrutura anterior quando fornecido [1, 2, 3] como argumento e, escreva também, a função listToArray que produz um array a partir de uma lista. Além disso, implemente uma função auxiliar prepend que receberá um elemento e uma lista e será responsável por criar uma nova lista com esse novo elemento adicionado ao início da lista original e, por fim, crie a função nth que recebe uma lista e um número como argumentos e retorna o elemento que está na posição informada pelo número ou undefined caso não exista elemento em tal posição.
*/
let nestedList = {};

nestedList = arrayToList([1, 2, 3]);

function arrayToList(array){
    let newList = {};
    Object.assign(newList, array);
    return newList;
}

console.log("Nested List", nestedList);
let newArray = [];

newArray = listToArray(nestedList);

function listToArray(list){
    newArray = JSON.stringify(list);
    console.log(newArray);
}
