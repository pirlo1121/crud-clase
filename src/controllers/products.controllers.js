import mongoose from "mongoose";
import { productModel } from "../models/prodcuts.models.js"

export async function getProducts(req, res){
    try {

        const products = await productModel.find();
        return res.status(200).json({ok: true, products})

    } catch (error) {
        return res.status(500).json({ok: false, msg: "Error interno"})
    }
}

export async function getProductById(req, res){
    try {
        const id = req.params.id;

        if( !mongoose.isValidObjectId(id) ){
            return res.status(400).json({ok: false, msg: "ID invalido"})
        }

        const product = await productModel.findById(id);
        
        if(!product){
            return res.status(404).json({ok:false, msg: "Producto no encontrado"})
        }

        return res.status(200).json({ok: true, product});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false, msg: "Error interno"})
    }
}

export async function createProduct(req, res){
    try {
        const data = req.body;
        const prodcut = await productModel.create(data);
        return res.status(201).json({ok: true, prodcut});

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok: false, msg: "Error interno"})
    }
}

export async function updateProduct(req, res){
    try {
        
    } catch (error) {
        return res.status(500).json({ok: false, msg: "Error interno"})
    }
}

export async function deleteProduct(req, res){
    try {
        
    } catch (error) {
        return res.status(500).json({ok: false, msg: "Error interno"})
    }
}

