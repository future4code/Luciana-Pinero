// Exercicio 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Explique o que o codigo faz. Qual o teste que ele realiza? Para que tipos de números ele
// imprime no console "Passou no teste" ? Para que tipos de numeros a mensagem é "Não passou no teste?"

// Resposta: No codigo acima, o teste realizado é verificar um numero aleatorio qualquer digitado pelo usuario. E após é realizado
// o operador Resto da Divisão na qual qualquer número par, sempre retornará zero como resto que o caso do retorno da mensagel "passou no teste"
// e qualquer número impar retona com Resto da Divisão diferente de zero então como mensagem "Não passou no teste".

// Exercicio 2:
// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima?
// Resposta: Serve para imprimir uma mensagem de informação sobre o preço de cada fruta no console de acordo a resposta do usuário
// a primeira pergunta "Escolha uma fruta"

// b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// Resposta: O preço da fruta Maçã é, R$2,25.

// c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que
// está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// Resposta: O preço da fruta Maçã é, R$5.- Pois precisa sempre ter o break para que o último comando não assuma o comando padrão.

// Exercício 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a. O que a primeira linha está fazendo?
// Resposta: A primeira linha está pedindo ao usuario que digite um número.

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Resposta: Se o usuario digitar o número 10 a mensagem que aparecerá no terminal será " Esse número passou no teste" e se
// fosse o número -10 no console aparece uma mensagem de erro.

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Resposta: Sim há uma mensagem de erro, porque a linha console.log(mensagem) está fora do bloco e portanto não consegue
// "ler" o comando let mensgem="Essa mensagem é secreta!!!"

// EXERCÍCIO 4

// Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário
// qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// 1. Faça um prompt para receber a idade do usuário e guarde em uma variável. Garanta que essa variável é do tipo Number,
// você deve usar o cast para number para isso.

// const idade = Number (prompt("Qual a sua idade?"))

// 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console
// "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

// if(idade>=18) {
//     console.log ("Oba!! você já pode dirigir!")
// }else {
//     console.log("Você ainda não pode dirigir!")
// }

// EXERCÍCIO 5
// // Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou
// // V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = prompt ("Qual turno você estuda? Digite M para Matutino, V para Vespertino e N para Noturno.").toUpperCase()

// if(turno ==="M"){
//     console.log ("Bom Dia!")
// }
// else if(turno ==="V"){
//     console.log("Boa Tarde!")
// }
// else if(turno ==="N"){
//     console.log("Boa Noite!")
// }
// else{
//     console.log("Resposta Errada, faça de novo")
// }

// EXERCICIO 6
// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turno = prompt ("Qual turno você estuda? Digite M para Matutino, V para Vespertino e N para Noturno.").toUpperCase()
// switch(turno){
//     case "M":
//         console.log ("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa noite")
//         break
//     default:
//         console.log("Resposta Errada, faça de novo")
//         break
// }

// EXERCICIO 7

// Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia e se o
// ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra
// pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima
// no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const genero = prompt("Qual gênero de filme vocês vão assistir?").toLowerCase()
// const preco= Number (prompt (" Qual o preço do ingresso?"))

// if(genero === "fantasia" && preco <= 15) {
//     console.log("Bom filme!")
// }
// else{
//     console.log("Escolha outro filme :(")
// }

// Desafio
// Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo
// prompt que snack ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens
// "Bom filme!" e "... com [SNACK]", trocando [SNACK] pelo que o usuário colocou no input.

// const genero = prompt("Qual gênero de filme vocês vão assistir?").toLowerCase()
// const preco= Number (prompt (" Qual o preço do ingresso?"))
// const snack= prompt("Qual snack você vai comprar? Pipoca, Chocolate, Pão de queijo...?")

// if(genero === "fantasia" && preco <= 15) {
//     console.log(`Bom filme! e ...com ${snack}`) || console.log ("Bom filme e ...com " + snack)
// }
// else{
//     console.log("Escolha outro filme :(")
// }
