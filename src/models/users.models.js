import mongoose from "mongoose";

// crear Schema y modelo 
const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        email: String,
        password: String,
    });


export const UserModel = mongoose.model('User', userSchema)
