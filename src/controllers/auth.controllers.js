import { createToken } from "../helpers/jwt.js";
import { UserModel } from "../models/users.models.js";
import bcrypt from 'bcrypt';


export async function createUser(req, res) {
    try {

        const data = req.body;

        const userFound = await UserModel.findOne({email : data.email});
        
        if(userFound){
            return res.status(400).json({ok: false, msg: "Correo ya registrado"})
        }

        // Encriptar password
        const saltRounds = 10; // entre más alto más seguro
        const hashPassword = await bcrypt.hash(data.password, saltRounds);


        const user = new UserModel({
            name: data.name,
            age: data.age,
            email: data.email,
            lastName: data.lastName,
            password: hashPassword
        })

        await user.save();
        
        return res.status(201).json({ok: true, user})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok: false, msg: "Error interno"})
    }
}


export async function  login(req, res) {

    try {
        const { email, password } = req.body;
        // const data = req.body 

        // buscar el correo en la DB
        const userFound = await UserModel.findOne({email});

        if(!userFound){
            return res.status(404).json({ok: true, msg: "Correo no registrado"})
        }
        
        const isValid = await bcrypt.compare(password, userFound.password );

        if(!isValid){
            return res.status(400).json({ok: false, msg: "contraseña incorrecta"})
        }

        // CREAR TOKEN jsonwebtoken

        // eliminar la contraseña de userFound
        const token = createToken({userFound});
        res.status(200).json({ok: true, token: token, role: userFound.role});


    } catch (error) {
        console.log(error)
        return res.status(500).json({ok: false, msg: "Error interno"})
    }
    
}