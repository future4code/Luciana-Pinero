// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Request, Response, Express} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });


  app.get('/test', (req: Request, res: Response) => {
    res.send('Hello, world!')
   })