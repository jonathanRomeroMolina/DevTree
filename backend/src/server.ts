import express from 'express'; //Esto es ES6, lo que se usa en el front
import cors from 'cors'
import 'dotenv/config'
import router from './router';
import { connectDb } from "./config/db";
import { corsConfig } from './config/cors';

connectDb();
const app = express(); //Esto es la instancia del servidor

//cors
app.use(cors(corsConfig))

//leer datos de formularios
app.use(express.json());    //Esto es un ejemplo de middleware
app.use('/', router); //Busca las rutas con el .use

export default app; 
//Exportamos la instancia del servidor para poder usarla en otro lado, en este caso el index.ts