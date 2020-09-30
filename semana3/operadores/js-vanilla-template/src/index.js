//Exercícios de interpretação de código:
//Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) 
// Resposta: a. false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)
// Resposta: b. false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)
// Resposta: c. true

// console.log("e. ", typeof resultado)
// Resposta: e. boolean



// 2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// let array
// console.log('a. ', array)
// Resposta: a. undefined

// array = null
// console.log('b. ', array)
// Resposta: b. object

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// Resposta: c. 11

// let i = 0
// console.log('d. ', array[i])
// Resposta: d. 3 

// array[i+1] = 19
// console.log('e. ', array)
// i+1 = 1 se array[1] = 19 a Resposta será:
// array=[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// const valor = array[i+6]
// console.log('f. ', valor)
// Resposta f. valor= 9

// Exercícios de escrita de código:

// 1. Faça um programa que:

// a)Pergunte a idade do usuário
// b)Pergunte a idade do seu melhor amigo ou da sua melhor amiga?

// let idade=Number(prompt("Qual é a sua idade"))
// let idadeAmigo= Number(prompt("Qual é a idade do seu melhor amigo ou amiga?"))
// console.log("a.", idade)
// console.log("b.", idadeAmigo)

// // c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// let maior=Number(idade)>Number(idadeAmigo)
// console.log("Sua idade é maior do que a do seu melhor amigo?", maior)

// // d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)

// let diferencaIdade= Number(idade)-Number(idadeAmigo)
// console.log(diferencaIdade)


// 2. Faça um programa que:

// a. Peça ao usuário que insira um número par.

// let numeroPar=Number(prompt("Por gentileza, insira um número par"))
// console.log(numeroPar)

// b. Imprima na tela o resto da divisão desse número por 2.

// let restoDaDivisao= numeroPar%2
// console.log(restoDaDivisao)

// c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Resposta: Sim, o resto da divisão sempre será zero pois qualquer número par divido por dois dá como resultado
// um numero inteiro, ou seja 0 de resto.

// d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Se o usuario inserir um número impar o resto da divisão vai ser um número diferente de zero.

// 3.Faça um programa, seguindo os passos:

// a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

// let listaDeTarefas=[]

// // b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// let tarefa1 = prompt("Me conte qual sua primeira tarefa do dia")
// let tarefa2= prompt("Me conte qual sua segunda tarefa do dia")
// let tarefa3= prompt("Me conte qual sua terceira tarefa do dia")

// listaDeTarefas.push(tarefa1)
// listaDeTarefas.push(tarefa2)
// listaDeTarefas.push(tarefa3)



// // // c. Imprima o array na tela
// console.log (listaDeTarefas)

// // // d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

// let tarefaRealizada = prompt("Qual tarefa você já realizadou hoje? a 0,1 ou 2?")
// console.log(tarefaRealizada)

// numeroDaTarefa= Number(tarefaRealizada)

// // // e. Remova da lista o item de índice que o usuário escolheu.
// listaDeTarefas.splice Number(numeroDaTarefa, 1)

// // f. Imprima o array na tela
// // console.log(listaDeTarefas)


// Exercicio 4

// Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// let nome = prompt( "Qual seu nome ?")
// let email = prompt( "Qual seu email?")

// let mensagem = "O e-mail "+email+" foi cadastrado com sucesso. Seja bem-vinda(o), "+nome+"!"
// alert(mensagem)

