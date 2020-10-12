// Lista de Exercícios:

// Exercícios de interpretação de código

// Exercicio 1:

// O que ela faz: A função foi criada para que o usuario inclua um valor de cotação do dolár do dia e a partir daí possa incluir qualquer valor 
// em dolár e calcular quanto seria em Reais.  

// Como Faz: Quando a função é invocada o parâmetro incluso do valor em dolár, busca o input incluso pelo usuário através do Prompt do valor da 
// cotação do dia, e a função fará o cálculo do valor de dolar * o valor da cotação informada pelo usuario. 
// 
// Valor impresso no console: O retorno no console.log será de o valor em dolar no caso 100 * X ( a cotação do dolár inclusa pelo usuario no 
// prompt.)


// Exercicio 2:

// O que ela faz: A função investeDinheiro calcula qual será o resultado dos valores aplicados (valor) em cada tipo de investimento 
// (tipoDeInvestimento).

// Como faz: Quando a função é invocada, é informado o valor e o tipo de investimento escolhido. Assim é percorrido todos os tipos através 
// do Loop Switch que encontra as caracteristicas de rentabilidade de cada investimento ( fator de multiplicação), imprimindo no console o 
// valor vezes a rentabilidade escolhida do investimento.

// Valor impresso no console: No console.log (novoMontante) será impresso o valor de ações para o montante de 150. No caso como a função 
// investeDinheiro informa que o fator de multiplicação de ações será o valor de 1.1, o valor total impresso será de 165. 
// No console.log (segundoMontante) erá impresso o valor de tesouro Direto para o montante de 200. No caso como a função 
// investeDinheiro não informa o fator de multiplicação de tesouro Direto a mensagem impressa será "Tipo de Investimento informado incorreto"

// Exercicio 3:

// O que ela faz: A função foi criada para que percorra um Array de números identificados os números pares e impares e adicionando-os em novos
// arrays. Para que como resultado, possamos ver a quantidade de elementos no array principal e nos novos arrays criados. 

// Como faz: A função For Of ( para cada) percorre todo o array principal calculando quais são os elementos pares através do operador 
// "Resto da Divisão" e incluindo uma condicional que se ( If) o elemento for par ele fará a inclusão no novo array1 através do "Push" senão (else)
// fará a inclusão dos demais elementos ( impares) no Array 2.

//  Valor Impresso no Console: "Quantidade total de números " 14 ( através da propriedade Length), no console.log (array1.length) será impresso o
// valor 6 e no console.log (array2.length) será impresso o valor 8.

// Exercicio 4: 

// O que ela faz: A função percorre um array de números através do for of criando uma condicional if que alterará as variaveis iniciais até o final 
// do loop.

// Como faz: É dado um array de numeros iniciais, através do for of é percorrido todos os números do array com 2 condicionais "se" (if)
// na qual Se o elemento disposto no Array [0] < do que a variavel numero1 = infinity ( maior de todas ) a variavel assume o valor do Array [0] e assim 
// suscessivamente. Na segunda condição se o elemento disposto no Array [0] > do que a variavel numero2 = 0 a variavel numero2 assume o valor de Array [0]
// e assim suscessivamente fazendo o loop nas duas condições de forma apartada até o final do array. 

// Valor Impresso no console: (numero1) -10 (numero2) 1590

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Exercicios de Logica de Programação

// 1.

// arrayParaPercorrer = [1,5,6,11,12,17,21]

// let i=0
// while(i<arrayParaPercorrer.length){
//     console.log(arrayParaPercorrer[i])
//     i++
// }



// for (let i =0; i<arrayParaPercorrer.length; i++){
//     console.log(arrayParaPercorrer[i])
// }


// for(let numero of arrayParaPercorrer){
//     console.log(numero)
    
// }

// Exercicio 2

// Conceitos de Operadores Logicos:
// && - retorna true se todos forem true
// || - retorna false se todos forem false
// ! - sempre retorna o boleano oposto 

// a) true, false, true - Retorna false, pois nem todos os boleanos são true.
// b) (false) || false - retorna false, pois os 2 primeiros boleanos são false.
// c) (false || true) && (false || true) - retorna true pois os dois primeiros e os dois ultimos boleanos são true.
// d) !(false && true) || !(true && true) - true || false - retorna true porque os dois elementos  não são false.
// e) !(true) && !(true) || (true && true && true) - retorna true

//  Exercicio 3

// const quantidadeDeNumerosPares = 7 // incluir um numero N
// let i = 0
// while(i < quantidadeDeNumerosPares) { // ser apenas < pois se inclui o = ele soma mais 1, pois o indice começa no zero.
//   console.log(i*2)

//   i++ // Adicionar um i++ para evitar o loop infinito
// }

// Resposta: este codigo não funciona porque falta incluir o N, precisa ajustar a condição e incluir o incremento (i++). 

// Exercicio 4

// let qualTriangulo =(a,b,c)=>{

//     if(a === b && b === c && a ===c){
//         console.log("O triangulo é Equilátero")
//     }else if (a !== b && b !== c && a !== c){
//         console.log("O triangulo é Escaleno")
//     }else 
//     console.log (" O triangulo é Isosceles")
// }

// let resultado = qualTriangulo (10,11,10)

// Exercicio 5

// let valorUm = Number(prompt("Escreva um número"))
// let valorDois = Number(prompt("Escreva outro número"))

// let valorUmMaior = valorUm > valorDois
// let valorDoisMaior = valorDois > valorUm
// let valorIgual = valorUm === valorDois
// let diferencaUmMaior = valorUm-valorDois
// let diferencaDoisMaior = valorDois-valorUm


// if (valorUmMaior){
//     console.log (`O maior é :${valorUm}`)
// } else if (valorDoisMaior){
//     console.log (`O maior é ${valorDois}`)
// } else {
//     console.log ("Os valores são iguais")
// }

// if (valorUm % valorDois === 0) {
//     console.log (`${valorUm} é divisivel por ${valorDois}`)
// }else{
//     console.log (`${valorUm} não é divisivel por ${valorDois}`)}

// if (valorDois % valorUm === 0) {(
//     console.log (`${valorDois} é divisivel por ${valorUm}`)
// }else{
//     console.log (`${valorDois} não é divisivel por ${valorUm}`)}
 
// if (valorUmMaior){
//     console.log (`A diferença entre eles é ${diferencaUmMaior}`)
// } else if (valorDoisMaior){
//     console.log (`A diferença entre eles é ${diferencaDoisMaior}`) 
// } else if (valorIgual) {
//     console.log ("Os Números são iguais")
// }
    

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// Exercicios de Funcoes:

// 1 Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número. 
// Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)

const arrayDeNumeros =[3,2,74,5,6]
let maiorNumero = arrayDeNumeros[0]
let menorNumero = arrayDeNumeros[0]

for (let numero of arrayDeNumeros){
    if (maiorNumero < numero){
        maiorNumero = numero
    }if (menorNumero > numero){
        menorNumero = numero}
}
    
let indice1 = arrayDeNumeros.indexOf(maiorNumero)
arrayDeNumeros.splice(indice1,1)
let indice2 = arrayDeNumeros.indexOf(menorNumero)
arrayDeNumeros.splice(indice2,1)

let segundoMaior = arrayDeNumeros[0]
let segundoMenor = arrayDeNumeros[0]

for (let numero of arrayDeNumeros){
    if (segundoMaior < numero){segundoMaior = numero}
    if (segundoMenor > numero){segundoMenor = numero}
}

console.log(`O segundo maior número é ${segundoMaior}`)
console.log(`O segundo menor número é ${segundoMenor}`)






// 2 Exercicio

// let hello = () => {
//     alert ("Hello Future 4")
// }

// const imprimir = hello ()

// ---------------------------------------------------------------------------------------------------------------

// Exercicio de Objetos

// 1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos

// Objetos são um conjunto de informações (dados) que são dispostos de uma forma mais organizada no código. 
// os objetos permitem que guardemos uma informação de forma desordenada, já um array permite que guardemos 
// as informações de forma ordenada. E no array conseguimos incluir dados, substituir, retirar etc tudo de acordo
// à posição. 

// 2.Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2) e retorna um objeto 
// com 4 informações: largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).


// let criaRetangulo = (lado1, lado2) => {
//     return {

//     largura: lado1,
//     altura: lado2, 
//     perimetro: (2*(lado1+lado2)),
//     area: (lado1*lado2)

// }
// }

// let resultado = criaRetangulo(20,10)
// console.log (resultado)

// 3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor 
// e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
// Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n. A lista de 
// atores/atrizes deve ser impressa inteira, independente do tamanho da lista

// let filmeFavorito ={
//     nome: "Procurando Nemo",
//     ano: 2003 ,
//     diretor: "Andrew Stanton",
//     atores: [`Nemo, Dory e Marlin!! `]
// }

// let imprime = (`Venha assistir ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores} `)
// console.log (imprime)

// 4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de nome, idade, email e endereco. Crie uma função 
// chamada anonimizarPessoa, que deverá retornar um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar 
// do nome. O objeto original deve ser mantido com o nome da pessoa.

// let euObjeto ={
//     nome: "Luciana Verdinelli",
//     idade: 34 ,
//     email: "luverdinelli@gmail.com",
//     endereco: "Rua Luiz Oscar de Carvalho, 207"
// }

// let anonimizarPessoa = () => {
//     let novoObjeto = {
//         ...euObjeto,
//         nome: "Anônimo"
//     }
//     return novoObjeto
// }

// console.log (anonimizarPessoa(euObjeto))

// -------------------------------------------------------------------------------------------------------------------

// Exercicio de Funções de Array

// Considere um array com o seguinte formato:

// array= [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 20)

// let adultos = (adulto, index,array) =>{
//     if(adulto.idade >= 18){
//         return true
//     }
//     return false
// }

// let soAdultos = array.filter(adultos)

// console.log (soAdultos)

// b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

// let soCriancas = array.filter ((criancas,index,array)=>{
//     if(criancas.idade <=18){
//         return true
//     }return false
// })

// console.log ( soCriancas)

// 2.Em todos os itens deste exercício, você terá que escrever uma função cuja entrada seja um array. Para testes, 
// considere: 

// const array = [1, 2, 3, 4, 5, 6]

// a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.

// let dobro = array.map((numeros, index,array) =>{
//     return (numeros*2)
// })

// console.log (dobro)

// b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]` 

// const array = [1, 2, 3, 4, 5, 6]

// let triploString = array.map((numeros, index,array) =>{
//     return String(numeros*3)
// })

// console.log (triploString)




// c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". 
// Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]`

// const array = [1, 2, 3, 4, 5, 6]

// let paridade = array.map((numeros, index,array) =>{
//     if (numeros%2===0){
//         return (`${numeros} é par`)
//     } else {
//         return (`${numeros} é ímpar`)
//     }
    
// })

// console.log (paridade)

// Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). 
// As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. 
// Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e 
// todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não 
// podem. Considere, então, essas pessoas:

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

// a) Escreva uma função que receba este array e devolva outro array somente com as pessoas que tem permissão de entrar no brinquedo

// let podeEntrar = pessoas.filter ((elemento,index,array)=>{
//     if((elemento.idade >=14) && (elemento.altura >= 1.5) && (elemento.idade <= 60)){
//         return true
//     }return false
// })

// console.log (podeEntrar)

// b) Escreva uma função que receba este array e devolva outro array somente com as pessoas que não podem entrar no brinquedo.

// let naoPodeEntrar = pessoas.filter ((elemento,index,array)=>{
//     if((elemento.idade <14) || (elemento.altura < 1.5) || (elemento.idade >= 60)){
//         return true
//     }return false
// })

// console.log (naoPodeEntrar)

// 4. Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua 
// consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

    // A sua tarefa é criar um **array** com os e-mails para cada um deles. Existem dois padrões de e-mail. 
    // Para as consultas **não canceladas** é:


    // Olá, ${ Sr./Sra. } ${ nome da pessoa }. Estamos enviando esta mensagem para
    // ${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse
    // o recebimento deste e-mail.
    

    // Para as consultas **canceladas** é:


    // Olá, ${ Sr./Sra. } { nome da pessoa }. Infelizmente, sua consulta marcada
    // para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em 
    // contato conosco para remarcá-la

    
//     const consultas = [
//     	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
//     	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
//     	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
//     	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
//     ]

// let resolucao = []
// consultas.filter ((elemento,index,consultas)=>{
//     if((elemento.cancelada === false) && (elemento.genero === "masculino")){

//         return resolucao +=(`Olá Sr. ${elemento.nome}.Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${elemento.dataDaConsulta}. Por Favor, acuse o recebimento deste e-mail.`)

//     } else if ((elemento.cancelada === false) && (elemento.genero === "feminino"))

//         return resolucao +=(
//             `Olá Sra. ${elemento.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${elemento.dataDaConsulta}. Por Favor, acuse o recebimento deste e-mail.`)
//     })

//     console.log (resolucao)

//     let resolucaoDois = []
//     consultas.filter ((elemento,index,consultas)=>{

//         if((elemento.cancelada === true) && (elemento.genero === "masculino")){

//             return resolucaoDois +=(`Olá Sr. ${elemento.nome}. Infelizmente sua consulta marcada para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarca-la`)
    
//         } else if ((elemento.cancelada === true) && (elemento.genero === "feminino"))

//             return resolucaoDois +=(`
//             Olá Sra. ${elemento.nome}. Infelizmente sua consulta marcada para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarca-la`)
//         })
    
//     console.log (resolucaoDois)    


// 5. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender 
// como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras
// realizadas pelo cliente. Veja abaixo:

// A sua tarefa é: faça uma função que receba um **array** com os objetos do tipo acima e atualize o **saldo total** individual de cada um, 
// **sem criar um novo** array.
// Em outras palavras, o **array** do exemplo acima deve ficar assim:

// [ 
// 	{ cliente: 'João', saldoTotal: 400, compras: [ 100, 200, 300 ] },
// 	{ cliente: 'Paula', saldoTotal: 6260, compras: [ 200, 1040 ] },
//   { cliente: 'Pedro', saldoTotal: -3340, compras: [ 5140, 6100, 100, 2000 ] },
//   { cliente: 'Luciano', saldoTotal: -1900, compras: [ 100, 200, 1700 ] },
//   { cliente: 'Artur', saldoTotal: 1300, compras: [ 200, 300 ] },
//   { cliente: 'Soter', saldoTotal: 1200, compras: [] } 
// ]


// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// contas.forEach ((elemento,index,array)=>{
//     let soma = 0
//     for ( let compra of elemento.compras) {
//         soma += compra
//     }
//     elemento.saldoTotal-= soma

// })

// console.log (contas)

