// Exercicio 1
// Leia o Codigo:
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// a. O que vai ser impresso no console?
// Vai ser impresso os valores 10 e 50.

// b.O que aconteceria se retirasse os dois console.log e simplesmente
// invocasse a função minhaFuncao(2) e minhaFuncao(10)?
// O que apareceria no console?

// Não aconteceria nada, pois sem o console.log nada é mostrado.
// ---------------------------------------------//--------------------------------------------
// Exercicio 2
// Leia o código abaixo:

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// a. Explicite quais são as saídas impressas no console
// É impresso no console apenas os 2 primeiros nomes, pois na função foi descrito que seria até o comprimento2.

// b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
// Apareceria o nome Amanda e Caio impresso no console pois a função se mantem.

// ----------------------------------------------\\-------------------------------------------------------
// EXERCICIO 3
// O código abaixo mostra uma função que recebe um array e devolve outro array.
// Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

// const metodo = (array) => {
//     let arrayFinal = [];

//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }

//     return arrayFinal;
//   }
//   Resposta: A função multiplica os valores pares do array por ele mesmo. Ex o elemento 2 vira 4
// o elemento 4 vira 16, o elemento 6 vira 36. a função poderia se chamar multiplicaPares.

// ------------------------------------------------//----------------------------------------

// EXERCÍCIO 4

// Escreva as funções explicadas abaixo:
// a. A função não deve receber nenhum parâmetro e
// deve imprimir uma mensagem falando algumas informações sobre você, como:
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que
// a função não possui entradas, apenas imprimir essa mensagem.

// const sobreMim = () =>{
//     console.log ("Eu sou a Luciana tenho 34 anos, moro em Florianópolis e sou Estudante")
// }

// const resultado=sobreMim ( )

// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
// o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não.
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

// const informacoesPessoa = (nome, idade, cidade, estudante) =>{
//     console.log (`Eu sou a ${nome} tenho ${idade} anos, moro em ${cidade} e ${souEstudante}.`)
// }

// const nome = "Luciana"
// const idade = 34
// const cidade = "Florianópolis"
// const estudante = true

// if (estudante === true){
//     souEstudante=(" sou Estudante")
// } else {souEstudante=("não sou Estudante")}

// const resultado= informacoesPessoa(nome,idade,cidade,estudante)

// -----------------------------------------------\\---------------------------------------------

// Exercicio 5:
// Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma
// das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// const somaNumeros = (x,y) => {
//     return x+y
// }

// const resultado = somaNumeros (21,5)
// console.log(resultado)

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro
// número é maior ou igual ao segundo.

// const retornaBoleano = (x,y) => {
//     return x>=y
// }

// const resultado = retornaBoleano (10,10)
// console.log(resultado)

// c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem
// 10 vezes. (não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)

// const imprimeString = (a) => {
//     for(let i=0; i<10; i++)
//     console.log(a)
// }

// const a = imprimeString ("banana")
// console.log (a)

// -------------------------------------------//------------------------------------------------------

// Exercicio 6

// Para os itens a seguir, considere o seguinte array para os seus testes:

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
// const arrayNum = (array) => {
//   return array.length;
// };
// console.log(arrayNum (array));

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// const parouImpar = (x) => {
//     if(x%2 === 0){
//         return true
//     }else {return false}
// }

// let resultado = parouImpar(31)
// console.log(resultado)

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

const arrayNum = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let quantNumPar = (array) => {
    const arrayPar =[]
    for(let arrayPar of arrayNum){
        if(array[i]%2 === 0){arrayPar.push (arrayNum)
        }
    }
    return arrayPar.length

}
const tamanho = quantNumPar(arrayNum)
console.log(tamanho)

// d. Reescreva seu código anterior (do item c) de tal forma que 
// ele utilize a função do item b para verificar se o número é par
