import mongoose from "mongoose";
import { productModel } from "../models/prodcuts.models.js"

export async function getProducts(req, res) {
    try {

        const products = await productModel.find().populate('userId', 'name');
        return res.status(200).json({ ok: true, products })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, msg: "Error interno" })
    }
}

export async function getProductById(req, res) {
    try {
        const id = req.params.id;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ ok: false, msg: "ID invalido" })
        }

        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({ ok: false, msg: "Producto no encontrado" })
        }

        return res.status(200).json({ ok: true, product });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, msg: "Error interno" })
    }
}

export async function createProduct(req, res) {
    try {
        const data = req.body;
        const idUser = req.user.userFound._id;
        data.userId = idUser
        const product = await productModel.create(data);
        console.log('authh', product)

        return res.status(201).json({ ok: true, product });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, msg: "Error interno" })
    }
}


export const getProductsByUser = async (req, res) => {
    try {
        const userId = req.user.userFound._id;

        const products = await productModel.find({ userId });

        return res.json({
            ok: true,
            total: products.length,
            products
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, msg: "Error interno" })
    }
};

export async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const data = req.body;

        const product = await productModel.findByIdAndUpdate(id, data, {
            new: true
        });

        if (!product) {
            return res.status(404).json({ msg: "Producto no encontrado." });
        }

        res.json({
            ok: true,
            msg: "Producto actualizado.",
            product
        });

    } catch (error) {
        return res.status(500).json({ ok: false, msg: "Error interno" })
    }
}

export async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        const product = await productModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ msg: "Producto no encontrado." });
        }

        res.json({
            ok: true,
            msg: "Producto eliminado."
        });
    } catch (error) {
        return res.status(500).json({ ok: false, msg: "Error interno" })
    }
}

