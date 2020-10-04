// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// alert("Bem vindo ao jogo de BlackJack!")
// console.log("Bem vindo ao jogo de BlackJack!")

// // O console imprime a mensagem inicial do jogo.

// let blackJack = confirm("Quer iniciar uma nova rodada")
// // chamamos uma variavel para fazer a pergunta do confirm. 

// if (blackJack) {
//    let carta1Jogador = comprarCarta()
//    let carta2Jogador = comprarCarta()
//    let carta1Computador = comprarCarta()
//    let carta2Computador = comprarCarta()

//    // Se o "BlackJack" .. primeiro compra as cartas que ativa a função descrita
//    //  no arquivo não mexer

//    let pontuacaoJogador = carta1Jogador.valor + carta2Jogador.valor
//    let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

//    // e gera outras 2 variaveis que soma a pontuação do jogador e a pontuação do computador

//    console.log(`Jogador - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - Pontuacao ${pontuacaoJogador}`)
//    console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - Pontuação ${pontuacaoComputador}`)

//    //  imprimindo o resultador no cnsole da soma das cartas do jogador e as cartas do Computador. 

//    if (pontuacaoJogador> pontuacaoComputador){
//       console.log("O Jogador Ganhou!")
//    } else if (pontuacaoJogador < pontuacaoComputador){
//       console.log ("O Computador ganhou :( ")
//    } else if ((pontuacaoJogador===pontuacaoComputador)) {
//       console.log( " Empatou! ")
//    }

//    // Gera a condição de que se a pontuação do jogador foi maior que do computador, mostra no console a mensagem
//    // que o Jogador ganhou
//    // Senão se, a pontuaçao do jogador foi menor que a pontuação do computador. mostra no console a mensagem
//    // que o Computador ganhou
//    // E por ultimo Senão se, a pontuação do Jogador e do Computador forem iguais no console mostra a mensagem
//    // que empatou.

// } else {
//   console.log("O jogo acabou");
// }

// // E por ultimo se o jogador apertar a função que não quer jogar mostra no console a informação " O Jogo acabou" 