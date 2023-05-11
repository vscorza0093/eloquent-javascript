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
let chess = "";
const sizeX = 228;
const sizeY = 228;
for (let i = 1; i <= sizeX; i++) {
  for (let j = 1; j <= sizeY; j++) {
    if (i % 2 != 0){
      if (j % 2 != 0)
        chess = chess + "#";
      else
        chess = chess + " ";
    }
    else {
      if (j % 2 != 0)
        chess = chess + " ";
      else
        chess = chess + "#";
    }
  }
  chess = chess + "\n";
}
console.log(chess)