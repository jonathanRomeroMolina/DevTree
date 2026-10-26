import {Router} from 'express'; 
import { body } from 'express-validator';

import { createAccount, getUser, login } from './handlers';
import { handleInputErrors } from './middleware/validation';
//Router permite configurar un objeto con todas las rutas que despues se agregan a a la aplicacino principal

const router = Router();

//Autenticacion y registro
  
//Envio de datos
router.post('/auth/register', 
    body('handle') //Estas son validaciones
        .notEmpty()
        .withMessage('El handle no puede ir vacio :('),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacio! :('),
    body('email')
        .isEmail()
        .withMessage('Ocurrio un problema con su email :('),
    body('password')
        .isLength({min: 8})
        .withMessage('Password corto - Minimo 8 caracteres'),
    handleInputErrors,
    createAccount
)
   
router.post('/auth/login', 
    body('email') //Recordar que la funcion body viene desde la API de express-validator
        .isEmail()
        .withMessage('Ocurrio un problema con su email :('),
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio! '),
    login
)

router.get('/user', getUser)


export default router;  