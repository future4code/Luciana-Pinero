/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
alert("Bem vindo ao jogo de BlackJack!");
console.log("Bem vindo ao jogo de BlackJack!");

let blackJack = confirm("Quer iniciar uma nova rodada");

if (blackJack) {
  let carta1Jogador = comprarCarta();
  let carta2Jogador = comprarCarta();
  let carta1Computador = comprarCarta();
  let carta2Computador = comprarCarta();

  arrayJogador = [carta1Jogador, carta2Jogador];
  arrayCommputador = [carta1Computador, carta2Computador];

  if (carta1Jogador.valor === 11 && carta2Jogador.valor === 11) {
    carta1Jogador = comprarCarta();
    carta2Jogador = comprarCarta();
  }
  if (carta1Computador.valor === 11 && carta2Computador.valor === 11) {
    carta1Computador = comprarCarta();
    carta2Computador = comprarCarta();
  }

  console.log(`Suas Cartas são: ${carta1Jogador.texto} ${carta2Jogador.texto} A Carta revelada do computador é 
${carta1Computador.texto}. Deseja Comprar mais uma carta?`);

  let revelacao = confirm("Deseja comprar mais uma carta?");

  if (revelacao) {
   while (pontos < 21 && confirm(Deseja comprar uma nova carta?))
    let novaCarta =comprarCarta()
    arrayJogador.push(novaCarta.texto)
  } else {
    console.log("Segue o jogo");
  }

  let pontuacaoJogador = carta1Jogador.valor + carta2Jogador.valor;
  let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor;

  console.log(
    `Jogador - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - Pontuacao ${pontuacaoJogador}`
  );
  console.log(
    `Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - Pontuação ${pontuacaoComputador}`
  );

  if (pontuacaoJogador > pontuacaoComputador) {
    console.log("O Jogador Ganhou!");
  } else if (pontuacaoJogador < pontuacaoComputador) {
    console.log("O Computador ganhou :( ");
  } else if (pontuacaoJogador === pontuacaoComputador) {
    console.log(" Empatou! ");
  }
} else {
  console.log("O jogo acabou");
}
