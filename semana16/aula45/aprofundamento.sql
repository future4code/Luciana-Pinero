-- Criar tabela
CREATE TABLE Actor(
	id VARCHAR(255) PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   salary FLOAT NOT NULL,
   birth_date DATE NOT NULL,
   gender VARCHAR(6) NOT NULL
);

-- Ver a estrutura de uma tabela
DESCRIBE Actor;

-- Modificar tabela: adicionar, remover e modificar colunas

ALTER TABLE Actor 
-- CHANGE salary salario INT;
-- DROP COLUMN hometown,
ADD name VARCHAR (255) NOT NULL;

ALTER TABLE Actor 
ADD hometown VARCHAR (255) DEFAULT "Rio de Janeiro";


-- Apagar tabela

-------------------------------------------------------------

-- Inserir valores
INSERT INTO Actor 
   (id, name, salario, birth_date, gender) 
VALUES 
   ('21','Tony Ramos',400000,'1948-08-25','male'),
   ('006','Camila Pitanga',320000,'1977-06-14','female'),
   ('007','Antônio Fagundes',230000,'1949-04-10','male'),
   ('008','Fernanda Montenegro',400000,'1929-10-16','female'),
   ('009','Moacyr Franco',719333,'2020-02-10','female');

-- Ler valores
SELECT * FROM Actor;
SELECT UPPER (name)
from Actor;

SELECT SUM(salario)
from Actor;

SELECT CONCAT ( name, ' nasceu em ', birth_date) AS FRASES
FROM Actor;

SELECT FRASES FROM Actor;

SELECT * FROM MoviesX;

SELECT COUNT (*), rating
FROM MoviesX
GROUP BY rating;

SELECT *
FROM MoviesX
ORDER BY release_date_of DESC
LIMIT 3;
-- Alterar valores
UPDATE Actor
SET name = "Tony Ramos"
WHERE id = "001";
-- Deletar valores

DELETE FROM Actor
WHERE id = " 002";

TRUNCATE TABLE Actor;