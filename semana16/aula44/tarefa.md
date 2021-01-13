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
