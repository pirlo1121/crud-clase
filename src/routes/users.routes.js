import express from 'express'
import { createUser, getUsers } from '../controllers/users.controllers.js';
const router = express.Router();

// cada ruta recibe 'nombre/ruta' y callback (funcion);
// CRUD = ( CREATE, READ, UPDATE, DELETE )
router.get("/users",  getUsers);
router.post("/createUser", createUser)


export default router