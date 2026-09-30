import mongoose, { mongo, Schema } from 'mongoose'

export interface IUser{
    handle: string
    name: string
    email: string,
    password: string
}

//1.- Se crea el mondelo configurando la "forma" en que se va almacenar los datos
const userSchema = new Schema({
    handle:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model<IUser>('User', userSchema);
//Los generics con los que estan dentro de los <> para utilizar como interface
export default User