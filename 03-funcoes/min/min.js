/*
Mínimo

O capítulo anterior introduziu a função Math.min que retorna o seu menor argumento. Nós podemos reproduzir essa funcionalidade agora. Escreva uma função min que recebe dois argumentos e retorna o menor deles.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
Dica: Se estiver tendo problemas para colocar as chaves e os parênteses nos seus lugares corretos, para ter uma definição de uma função válida, comece copiando um dos exemplos desse capítulo e modificando-o. Uma função pode conter várias declarações de retorno (return).
*/

let min = function(a, b) {
    if (a < b)
        return a;
    else 
        return b;
};

console.log(min(303333, 3123));