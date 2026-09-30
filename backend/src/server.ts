import express from 'express'; //Esto es ES6, lo que se usa en el front
import 'dotenv/config'
import router from './router';
import { connectDb } from "./config/db";

const app = express(); //Esto es la instancia del servidor

connectDb();

//leer datos de formularios
app.use(express.json());    //Esto es un ejemplo de middleware
app.use('/', router); //Busca las rutas con el .use

export default app; 
//Exportamos la instancia del servidor para poder usarla en otro lado, en este caso el index.ts