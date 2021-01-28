import express, { Router,Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { createUser } from '../data/createUser'
import { user } from '../types/user'



const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()


export const postUser=  async (req: Request, res: Response): Promise<void> => {

    try {
  
      const { logradouro, numero, complemento, bairro, cidade, estado} = req.body
  
      const id = uuidv4()
  
      if (!logradouro || !numero || !bairro || !cidade|| !estado) {
  
        throw new Error("Logradouro, numero, bairro, cidade ou estado não informados!")
  
      }
  
       const newUser: user = {logradouro:logradouro, numero:numero, complemento:complemento,
        bairro:bairro, cidade:cidade, estado:estado}
  
       await createUser(newUser)
   
       res.status(200).send("Usuario cadastrado com sucesso!")
  
     } catch (error) {
  
       res.status(400).send(error.message)
       
     }
}

