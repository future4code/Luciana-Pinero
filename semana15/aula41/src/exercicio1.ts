const minhaString : string = 10;
// Acontece um erro porque o 10 é um número e não uma string.

const meuNumero : number = 10;

// Dá certinho porque o número 10 é número mesmo

// Pra fazer com que a const meuNumero aceite uma string também, precisa fazer:

const meuNumeroAceitaString : number|string = "aceitou";

// Agora crie um novo objeto. Este objeto é uma pessoa e deve possuir três proprieades:
// nome, idade, corFavorita.

type pessoa = {
    nome: string,
    idade:number,
    corFavorita:string
}

