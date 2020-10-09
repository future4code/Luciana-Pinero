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