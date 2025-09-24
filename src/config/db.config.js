import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log('conectado a la base de datos')
    } catch (error) {
        console.log(error)
    }
}