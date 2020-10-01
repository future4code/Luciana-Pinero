// EXERCÍCIO 1

// O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Resposta: Imprime o valor 10, pois ele roda da seguinte forma: 
// i= i+1 logo o primeiro será i=0+1, i=0+2, i=0+3, i=0+4 sendo como o valor
// 1+2+3+4 = 10.

// EXERCÍCIO 2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//           console.log(numero)
//       }
//   }

// a.O que vai ser impresso no console?
// Resposta: Vai imprimir todos os numeros maiores que 18.

// b. Se eu quisesse acessar o índice de cada elemento dessa lista, 
// o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Resposta: Não é possivel a não ser que se crie um contador.

// EXERCICIO 3
// Nas perguntas abaixo, considere que você tenha acesso a um array  
// (chamado de 'array original') que seja composto somente de números. 
// Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// a) Escreva um programa que:
// Resposta: Imprima cada um dos valores do array original.

// const arrayOriginal=[ 1, 3, 5, 33, 32, 21, 7, 8, 9, 10]

// for (let in=0; i< arrayOriginal.length; i=i+1){
//     let elemento = arrayOriginal[in]
//     console.log(elemento)
// }

// b) Escreva um programa que:
// - **Imprima** cada um dos valores do array original divididos por 10

// const arrayOriginal=[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// for (let i=0; i< arrayOriginal.length; i=i+1){
//     let elemento = arrayOriginal[i]
//     console.log(arrayOriginal[i]/10)
// }

// c. Escreva um programa que:
//  **Crie** um novo array contendo, somente, os números pares do array original.
// - **Imprima** esse novo array

// const arrayOriginal=[ 1, 3, 5, 33, 32, 21, 7, 8, 9, 10]

// for (let i=0; i< arrayOriginal.length; i=i+1){
//     let elemento = arrayOriginal[i]
//     if (elemento%2===0) 
//     console.log(elemento)
// }

// d. Escreva um programa que:
// **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
//  - **Imprima** este novo array
const arrayPalavras=[ "O", "elemento", "do", "index", "i", "é", "número"]
const arrayOriginal=[ 1, 3, 5, 33, 32, 21, 7, 8, 9, 10]

let texto=""

for (let numero of arrayOriginal){
    texto="O elemento do index + "i" é: + numero arrayPalavras.push(texto) i++
    }
// 

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array 
// original:

const arrayOriginal=[ 1, 3, 5, 33, 32, 21, 7, 8, 9, 10]
