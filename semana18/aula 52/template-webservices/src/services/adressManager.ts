import axios from "axios";
import {address} from '../types/address';

const URL = "http://viacep.com.br/ws"

export async function getAdressByCep (cep:number): Promise<address> {

    const result = await axios.get (`${URL}/${cep}/json`)

    const myAdress : address = {
        name: result.data.logradouro,
        neighbourhood:result.data.bairro,
        city: result.data.city,
        state: result.data.state 
    }

    return myAdress;

}