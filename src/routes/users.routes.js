import express from 'express'
import { getUsers } from '../controllers/users.controllers.js';
const router = express.Router();

// cada ruta recibe 'nombre/ruta' y callback (funcion);
router.get("/users",  getUsers);


export default router