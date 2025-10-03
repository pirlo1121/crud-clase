import mongoose from "mongoose";

// crear Schema y modelo 
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        age: {
            type: Number,
            required: [true, "La edad es obligatoria"]
        },
        email: {
            type: String,
            required: [true, "El correo es obligatorio"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Email inválido']
        },
        password: {
            type: String,
            required: [true, "Password requerida"],
            minlength: [8, "La contraseña requiere minimo 8 carcateres"]
        },
    });


export const UserModel = mongoose.model('User', userSchema)


//  {
//      "name": "juan",
//      "age": 30,
//      "email": "juan@gmail.com",
//      "password": "123456789"
//  }

// expresiones regulares