/*
Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:

#
##
###
####
#####
######
#######
*/
console.log("-----Stair-----\n")
for (let i = 0; i < 8; i++) {
    let hash = "";
    for (let j = 0; j < i; j++)
        hash = hash + "#";
    console.log(hash);
}
console.log("\n-----End-----\n")

/*
FizzBuzz
Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. Para números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), imprima Buzz.

Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis ambos por 3 e 5 (e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles).
*/
console.log("-----Fizz Buzz-----\n")
for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("Fizz Buzz");
    else if (i % 3 == 0)
        console.log("Fizz");   
    else if (i % 5 == 0)
        console.log("Buzz");
    else    
        console.log(i);
}   
console.log("\n-----End-----\n")
/*
Tabuleiro de Xadrez
Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres. A cada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um tabuleiro de xadrez.

Passando esta string para o console.log deve mostrar algo como isto:

  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
Quando você tiver o programa que gere este padrão, defina a variável size = 8 e altere programa para que ele funcione para qualquer size, a saída da grade de largura e altura.
*/