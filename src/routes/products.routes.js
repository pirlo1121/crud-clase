import express from 'express';
import { createProduct, getProductById, getProducts } from '../controllers/products.controllers.js';
import { isAdmin, verifyToken } from '../middlewares/auth.js';
const routerProducts = express.Router();


// http://localhost:3000/products/tecnologia
routerProducts.get("/products", getProducts)
routerProducts.get("/product/:id", getProductById)
routerProducts.post("/createProduct",verifyToken, isAdmin, createProduct)
// routerProducts.post("/createProduct",createProduct)


routerProducts.get("/products/:category", getProducts)


export default routerProducts