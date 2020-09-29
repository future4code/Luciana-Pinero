// Exercícios de interpretação de código
// // Exercicio 1
// a = 10
// b = 10
// console.log(b)
// // Será impresso no console o número 10

// b = 5
// console.log(a, b)
// // Será impresso no console os números -> 10 5

// // Exercicio 2:
// a = 10
// b = 20
// c = a
// b = c
// a = b
// console.log(a, b, c)
// // Será impresso no console os números -> 10 10 10

// // Exercícios de escrita de código
// Exercicio 1:

// /*Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.*/

// const nome
// nome = prompt("Qual o seu nome?")
// // console.log(`Pergunta: Qual seu nome? Resposta:${nome}`)
// // /*

// // b) Declare uma variável para armazenar uma idade, sem atribuir um valor.*/

// let idade
// idade= prompt("Qual a sua idade?")
// // console.log(`Pergunta: Qual sua idade? Resposta:${idade}`)

// //c)Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
// console.log(typeof nome) //String
// console.log(typeof idade) //Number

// //d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// // Porque o nome é texto e a idade é numero.

// //e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

// const nome = prompt("Qual o seu nome?")
// let idade= prompt("Qual a sua idade?")
// console.log(`Pergunta: Qual seu nome? Resposta: ${nome}, Pergunta: Qual sua idade? Resposta:${idade}`)

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// console.log(typeof nome)
// console.log(typeof idade)

// Apareceu como String

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

// const nome = prompt("Qual o seu nome?")
// let idade= prompt("Qual a sua idade?")
// console.log(` Olá ${nome}, você tem ${idade} anos.`)

// Exericio 2:
// Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:
// 1. Qual o seu endereço?
// Resposta: Rua ABC, 123

    // let adress=prompt("Qual seu Endereço?")
    // console.log(`Resposta: ${adress}`)

// 2. Qual a sua cor favorita?
// Resposta: Azul

    // let color=prompt("Qual sua cor favorita?")
    // console.log(`Resposta: ${color}`)

// 3. Pra que time você torce?
// Resposta: Avaí

    // let soccer=prompt("Pra que time você torce?")
    // console.log(`Resposta: ${soccer}`)

// 4. Qual seu País preferido?
// Resposta: Espanha

    // let country=prompt("Qual seu País preferido?")
    // console.log(`Resposta: ${country}`)


// 5. Qual o nome do seu Pai e da sua Mãe?
// Resposta: Miguel e Marta

    // let parents=prompt("Qual o nome do seu Pai e da sua Mãe?")
    // console.log(`Resposta: ${parents}`)


// Exercicio 3:

// Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// let comidasPreferidas = [nhoque,carne,salada,camarão,pizza]

// a) Imprima na tela o array completo

// let arrayComidasPreferidas = ["nhoque","carne","salada","camarão","pizza"]
// console.log (arrayComidasPreferidas)

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
// seguida por cada uma das comidas, **uma embaixo da outra**.

// let arrayComidasPreferidas = ["nhoque","carne","salada","camarão","pizza"]
// console.log (`Essas são as minhas comidas preferidas: 
// ${arrayComidasPreferidas [3]}
// ${arrayComidasPreferidas [2]}
// ${arrayComidasPreferidas [1]}
// ${arrayComidasPreferidas [0]}
// ${arrayComidasPreferidas [4]}`)

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

    // let arrayComidasPreferidas = ["nhoque","carne","salada","camarão","pizza"]
    // let food=prompt("Qual sua comida preferida?")
    // console.log(`Resposta: ${food}`)
    // arrayComidasPreferidas [1]= food

    