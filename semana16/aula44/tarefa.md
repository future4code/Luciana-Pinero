Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo (que possui as opções female e male)
Abaixo está a query que cria essa tabela no MySQL

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

a. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

r: Comando CREATE TABLE : Comando usado para criar uma tabela
   Comando VARCHAR : é um comando para escrever uma string com um número limitado de caracteres
   Comando DATE : É um comando que representa uma Data ( YYYY - MM - DD)

b. O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

R: O comando SHOW DATABASES mostra informações dos Bancos de dados que estao salvos dentro da pasta, e o SHOW TABLES mostra informações das tabelas criadas.

c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

R: quando utiliza esse comando, aparece em uma tabela todos os dados passados na criação da tabela, de forma detalhada.

Exercicio 2:

O proximo passo é colocar dados em uma tabela:

INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

 b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

 INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
  "002", 
  "bananinha",
  1500000,
  "1964-08-23", 
  "male"
);

Gerou o erro 1062 - Duplicate entry "002" for key PRIMARY. Quer dizer que a id 002 foi duplicatada e é uma chave primaria.

 Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

 INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Gerou o erro 1136 - Column Count doesn´t match value count at row 1 - A contagem da coluna não corresponde a contagem do valor da coluna 1.

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

Gerou o erro 1364 - Field "name" doesn´t have a default value - O campo não não possui um valor padrão

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Gerou o erro 1292, Incorrect date value: "1950" for column birth_date at row 1 - O valor da data esta errada na coluna de data de aniversario - faltou as aspas.

f: Por fim crie mais um ator e mais uma atriz e prossiga para os proximos exercicios

Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador SELECT. Talvez a query mais famosa que existe é:

SELECT * FROM Actor

Ela faz com que se retornem todas as colunas (ou "informações") de todas as linhas (ou "entradas") da nossa tabela. 
Se quisermos limitar as colunas, devemos indicar assim logo após o operador SELECT. Abaixo, está uma query que retorna somente o ide o saláriode todos os atores SELECT id, salary from Actor 

Agora, se quisermos colocar uma condição para retornar as linhas (entradas), devemos usar o operador WHERE e colocar a nossa condição que pode usar alguns operadores (=, !=, >, etc). Abaixo, está uma query que retorna somente o id e o nome dos atores.

SELECT id, name from Actor WHERE gender = "male"   

a. Escreva uma query que retorne todas as informações das atrizes

SELECT * from Actor WHERE gender = "female"

b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos

SELECT * from Actor WHERE salary, name = "Tony Ramos"

SELECT salary from Actor WHERE name = "Tony Ramos"

c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

SELECT * from Actor WHERE gender = "invalid";

d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

SELECT id, name, salary from Actor WHERE salary > 500000

e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

R: aparece um erro dizendo que o nome descrito na coluna é desconhecido, para isso basta alterar para "name", desta forma aparece certinho o nome da Gloria Pires.

Exercicio 4 : Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

Para fazer a primeira parte, vamos usar o comparador LIKE, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: LIKE "A%" porque % indica uma string genérica. O operador "ou" é indicado por OR. Assim, a primeira condição é indicada por: WHERE name LIKE "A%" OR name LIKE "J%"

Já a segunda parte é simples: salary > 300000. O que pode confundir é o operador lógico "e" (AND). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

a. Explique com as suas palavras a query acima

A query faz com que se filtrem os nomes que começam com a Letra A e J e possuem um salario maior que 300mil.

b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000

c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%"OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

Exercicio 5 

Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date_of DATE NOT NULL,
		evaluation VARCHAR(11) NOT NULL
);

R: Criamos um tabela de filmes, na qual a ID pode possuir 255 caracteres e é uma chave primaria, o nome pode possuir 255 caracteres e não pode ser nulo, a Sinopse será no formato de texto e não pode ser nulo, a data de lançamento é no formato de data e não pode ser nulo e a avaliação vai de 0 a 10 sendo no maximo 2 caracteres.

Exercicio 6

a. Retorne o id, título e avaliação a partir de um id específico;

SELECT id, name, evaluation FROM MoviesX WHERE id = "002";

b. Retorne um filme a partir de um nome específico;

SELECT * FROM MoviesX
WHERE name = "DONA FLOR E SEUS DOIS MARIDOS";


