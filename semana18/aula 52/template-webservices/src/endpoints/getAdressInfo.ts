import { Request, Response } from "express";

export function getAdressInfo(req:Request, res:Response) {
    let errorCode: number = 400
try{
    if(isNaN (Number(req.params.cep))|| req.params.cep.includes("-")){
        throw new Error ("Numeric values only.")
    }
    

} catch (error) {
    res.status ( errorCode).send ({message: error.message});
}

}