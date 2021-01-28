import { connection } from '../connection/dataBaseConnection'

const createTable = async(): Promise<void> => {

    try {

        await connection.raw(`
    
            CREATE TABLE user (
                id VARCHAR (255) PRIMARY KEY,
                logradouro VARCHAR(255) NOT NULL,
                numero INT NOT NULL,
                complemento VARCHAR(255),
                bairro VARCHAR(255) NOT NULL,
                cidade VARCHAR(255) NOT NULL,
                estado VARCHAR(255) NOT NULL,
                   
            );
        `)
     

        console.log("Tabelas criadas com sucesso!")

        connection.destroy()

    } catch (error) {

      console.log(error.sqlMessage || error.message)

      connection.destroy()
    }

} 
createTable()