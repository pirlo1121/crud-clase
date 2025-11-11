import mongoose, { Schema } from "mongoose";

// crear Schema y modelo 
const productSchema = new mongoose.Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        name: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        imagen: String,
        description: {
            type: String,
            required: [true, "La descripción es obligatoria"]
        },
        price: {
            type: Number,
            required: [true, "El Precio es obligatorio"],
        },
        category: {
            type: String,
            required: [true, "categoria requerida"],
        },
        nameRestaurant: {
            type: String,
            required: [true, "El nombre del restaurante es obligatorio"],
        },

    });


export const productModel = mongoose.model('product', productSchema)
