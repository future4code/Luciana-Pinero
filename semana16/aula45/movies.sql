CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
  001, 
  "Tony Ramos",
  400000,
  "1948-08-25", 
"male"
  );
  
SELECT*FROM Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

SELECT*FROM Actor;

 INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
  "002", 
  "bananinha",
  1500000,
  "1964-08-23", 
  "male"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

SELECT*FROM Actor;
SELECT id, name from Actor WHERE gender = "male";

SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary > 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%"OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE MoviesX (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date_of DATE NOT NULL,
		evaluation VARCHAR(2) NOT NULL
);

INSERT INTO MoviesX (id, name, synopsis, release_date_of, evaluation)
VALUES(
  "001", 
  "Se eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um 
  fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);

INSERT INTO MoviesX (id, name, synopsis, release_date_of, evaluation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos 
  sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá 
  mais morar com ela",
  "2012-12-27", 
  "10"
);

INSERT INTO MoviesX (id, name, synopsis, release_date_of, evaluation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas 
  boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);

INSERT INTO MoviesX (id, name, synopsis, release_date_of, evaluation)
VALUES(
  "004", 
  "Aquarius",
  "O Filme se passa em Recife e conta a historia de uma Sra Viuva de 65 anos 
  que não quer sair do predio, cujo os outros apartamentos foram vendidos para uma construtora que 
  irá demoli-lo",
  "2016-05-17", 
  "9"
);

SELECT*FROM MoviesX;

SELECT id, name, evaluation FROM MoviesX WHERE id = "002";

SELECT * FROM MoviesX
WHERE name = "DONA FLOR E SEUS DOIS MARIDOS";

SELECT id, name, synopsis FROM MoviesX WHERE evaluation > 7;

SELECT * FROM MoviesX WHERE name LIKE "%vida%";

SELECT * FROM MoviesX
WHERE name LIKE "%você%" OR
      synopsis LIKE "%Recife%";
  
SELECT * FROM MoviesX
WHERE release_date_of < "2021-01-14";

SELECT * FROM MoviesX
WHERE release_date_of < "2021-01-14" AND name LIKE "%você%" OR
      synopsis LIKE "%você%" AND evaluation > 7;