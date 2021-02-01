import { Request, Response } from "express";
import { insertUser } from "../data/userDataBase";
import { generateToken } from "../business/services/authenticator";
import { hash } from "../business/services/hashManager";
import { generateId } from "../business/services/idGenerator";
import { businessSignup } from "../business/userBusiness";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, email, password, role } = req.body
      const newUser = {
         name: name,
         email: email,
         password: password,
         role
     }

     const token = await businessSignup(newUser)

      

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}