## Exercicio 1

Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 

O uso dele é simples, veja abaixo:

```tsx
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
```

*a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

R: Na minha opinião, utilizar String é melhor pois aceita letras e números, tornando o ID mais dificil de ser encontrado.

*b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

R: ./services/generationid

 import { v4 } from "uuid"

export function generateid(): string {
    return v4()
}

## Exercicio 2

Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:

```tsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

*a. Explique o código acima com as suas palavras.*

r: Na primeira parte do codigo é criada uma conexão entre os dados do arquivo .env e o codigo, de forma a quem o acesse não consiga visualizar informações sensiveis. Seguindo o codigo, é escrita uma função assincrona que cria um usuario, com id, email e password atraves dos dados da conexão e introduz na tabela. 

*b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

CREATE TABLE Users_Aula50 (
id VARCHAR (64) PRIMARY KEY,
email VARCHAR (255) UNIQUE NOT NULL,
password VARCHAR (255) NOT NULL
);


*c. Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*

import knex from "knex";

  const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

	const userTableName = "Users_Aula50";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	}


## Exercicio 3

Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:

```tsx
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```

*a. O que a linha `as string` faz? Por que precisamos usar ela ali?*

*b.* *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*