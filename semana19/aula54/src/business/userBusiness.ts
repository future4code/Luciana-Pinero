import { insertUser } from "../data/userDataBase";
import { generateToken } from "../business/services/authenticator";
import { hash } from "../business/services/hashManager";
import { generateId } from "../business/services/idGenerator";

export const businessSignup = async (
   input:any
) => {

      if (
         !input.name ||
         !input.email ||
         !input.password ||
         !input.role
      ) {
         throw new Error('Preencha os campos "name", "email" e "password"')
      }

      const id: string = generateId()

      const cypherPassword = await hash(input.password);

      await insertUser({
         id,
         name:input.name,
         email:input.email,
         password: cypherPassword,
         role:input.role
     })

      const token: string = generateToken({
         id,
         role: input.role
      })

      return token
   }