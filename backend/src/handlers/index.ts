//Es para funciones que manejan el tipo de peticio o request
import { Request, Response} from 'express'
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from "../models/User";
import { checkPassword, hashPasswrod } from '../utils/auth';

export const createAccount = async (req: Request, res: Response) => {
 
    const { email, password } = req.body

    //Con esto verificamos el email
    const userExists = await User.findOne({email})
    if (userExists) {
        const error = new Error('Un usuario con ese email ya esta registrado :(')
        res.status(409).json({error : error.message})
        return
    }

    //Y con esto comprobamos el handle (nombre de usuario)
    const handle = slug(req.body.handle, '')
     const handleExists = await User.findOne({handle})
    if (handleExists) {
        const error = new Error('Nombre de usuario no disponible!')
        res.status(409).json({error : error.message})
        return
    }

    //Aqui se crea y asignan los valores y comprobaciones como el password y el hancle
    const user = new User(req.body) //Esta instancia es la creacion del propio User

    user.password = await hashPasswrod(password)
    user.handle = handle
    
    await user.save();
    res.status(201).send('Registro Creado Correctamente :)') //Respuesta enviada al servidor
};

//Funcion para login

export const login = async (req: Request, res: Response) => {
    //Manejar errores | Primera validacion
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()})
        return
    }

    const { email, password } = req.body

    //Revisar si el usuario esta registrado
    const user = await User.findOne({email})
    if (!user) {
        const error = new Error('El usuario no existe ')
        res.status(404).json({error : error.message})
        return
    }

    // Comprobar el password
    const isPasswordCorrect = await checkPassword(password, user.password)
    if (!isPasswordCorrect) {
        const error = new Error('La contraseña es incorrecta')
        res.status(404).json({error : error.message})
        return
    }
 
    res.send('Autenticado...')
}