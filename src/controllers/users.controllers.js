import mongoose from "mongoose";
import { UserModel } from "../models/users.models.js";
import bcrypt from 'bcrypt';

export async function getUsers(req, res) {
    try {
        // Metodos de consulta mongoose
        const users = await UserModel.find();
        // estados http
        return res.status(200).json({ok: true, users})

    } catch (error) {

        return res.status(500).json({ok: false, msg: "Error interno"})
    }
}

export async function getUserById(req, res) {
    try {
        const id = req.params.id

        if( !mongoose.isValidObjectId(id) ){
            return res.status(400).json({ok: false, msg: "ID invalido"})
        }
        
        const user = await UserModel.findById(id)

        if( !user ){
            return res.status(404).json({ok: false, msg: "Usuario no encontrado"});
        }

        return res.status(200).json({ok: true, user})
        
    } catch (error) {
        return res.status(500).json({ok: false, msg: "Error interno"})
        
    }
}

export async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;

        const userUpdate = await UserModel.findByIdAndUpdate(id, data, {new: true});

        if(!userUpdate){
            return res.status(404).json({ok: false, msg: "Usuario no encontrado"})
        }
        return res.status(200).json({ok: true, userUpdate});

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok: false, msg: "Error interno"})
        
    }
}

export async function deleteUser(req,res) {
    try {
        const id = req.params.id;

        const deletedUser = await UserModel.findByIdAndDelete(id);

        if(!deletedUser){
            return res.status(404).json({ok: false, msg: "Usuario no encontrado"})
        }

        return res.status(200).json({ok: true, msg: "Usuario Eliminado"})

    } catch (error) {
        return res.status(500).json({ok: false, msg: "Error interno"});
        
    }
}
