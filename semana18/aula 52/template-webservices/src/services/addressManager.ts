import axios from "axios";
import {address} from '../types/address';

const URL = "http://viacep.com.br/ws"

export async function getAddressByCep (cep:string): Promise<address> {

    try {
    const result = await axios.get (`${URL}/${cep}/json`)
        
    const myAdress : address = {
        name: result.data.logradouro,
        neighbourhood:result.data.bairro,
        city: result.data.localidade,
        state: result.data.uf
    }

    return myAdress;

}catch (error){
    throw new Error (error.message)
}

}