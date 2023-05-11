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
