import bcrypt from 'bcrypt'

export const hashPasswrod = async (password: string) => {
    const salt = await bcrypt.genSalt(10); //Un salt es una cadena de caracteres aleatorios / aumentar la seguridad
    return await bcrypt.hash(password, salt) //Hassear el password
}

export const checkPassword = async (enteredPassword: string, hash: string) => {
    return await bcrypt.compare(enteredPassword, hash)
}


