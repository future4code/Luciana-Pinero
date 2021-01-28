import { connection } from '../connection/dataBaseConnection'
import { user } from '../types/user'
 


export const createUser = async(user: user): Promise<any> => {

    try {

        await connection.insert({
            logradouro: user.logradouro,
            numero: user.numero,
            complemento: user.complemento,
            bairro: user.bairro,
            cidade: user.cidade,
            estado:user.estado
          })
          .into("user");

        console.log("Usuario inserido com sucesso!")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}
