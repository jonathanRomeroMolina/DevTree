import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    //Manejar errores
    let errors = validationResult(req)
    console.log('Desde validation.ts :)');
    
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()})
        return
    }
    next() 
    /*  La funcion next como tercer parametro y al final de la ejecucion del if significa que:
        Esto es porque al estar a nivel de ruta la funcion siempres se va a ejecutar entonces 
        la funcion next hace que si no se detiene en este pedazo de codigo la funcion siguiente o debajo de
        la llamada se ejecute normalmente.
     */
}