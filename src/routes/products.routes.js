import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, getProductsByUser, updateProduct } from '../controllers/products.controllers.js';
import { isOwner, verifyToken } from '../middlewares/auth.js';
const routerProducts = express.Router();


routerProducts.get("/products", getProducts);
routerProducts.get("/product/:id", getProductById);
routerProducts.post("/createProduct",verifyToken, isOwner, createProduct);
routerProducts.get("/productsByUser",verifyToken, getProductsByUser);
routerProducts.put("/updateProduct/:id",verifyToken, updateProduct);
routerProducts.delete("/deleteProduct/:id",verifyToken, deleteProduct);






export default routerProducts