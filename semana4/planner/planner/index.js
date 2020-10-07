// A sua tarefa de hoje é criar um planner semanal digital, em que o usuário digita uma tarefa,
// seleciona um dia da semana em uma lista de seleção e, ao clicar em um botão, a tarefa é criada
// no dia da semana correto.

// 1 - Crie uma função que é chamada ao clicar no botão "Criar Tarefa". Use um evento apropriado
// que identifique o clique no botão.

// function cliqueNoBotao(){
//         const tarefaUm = document.getElementById ("tarefa")
//         console.log (tarefaUm.value)
// }

// 2 - Dentro da função, capture o valor do campo do HTML (que é a tarefa a ser colocada no planner)
// e armazene em uma variável.

// function cliqueNoBotao(){
//     const meuInput = document.getElementById ("tarefa")
//     console.log (meuInput.value)

// }

// 3 - Capture o valor do seletor do HTML (o dia da semana selecionado) e armazene em uma variável

// function cliqueNoBotao(){
//     const meuInput = document.getElementById ("tarefa")
//     console.log (meuInput.value)

//     const diaDaSemana = document.getElementById("dias-semana")
//     console.log (diaDaSemana.value)
// }

// 4 - Dê um console.log das variáveis para checar se você pegou os valores corretamente
// (só não esqueça de não subir o código com console.log).

// OK! Funciona!!

// 5 - Adicione, através do JS, a tarefa (capturada no passo 2) na div identificada com o
// dia da semana que você capturou no passo 3.

function adicionaNoPlanner() {
  const meuInput = document.getElementById("tarefa").value;
  const diaDaSemana = document.getElementById("dias-semana").value;
  // console.log (meuInput.value)
  // console.log(diaDaSemana.value)

  if (meuInput.value !== ""){
  const diaDaSemana = document.getElementById("quinta");
  diaDaSemana.innerHTML += `<div>${meuInput.value}</div>`;

  meuInput.value=""  
  
  } else {
    alert("Escreva uma tarefa válida :)")
  }

}