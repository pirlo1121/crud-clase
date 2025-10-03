import express from 'express'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.controllers.js';
const router = express.Router();

// cada ruta recibe 'nombre/ruta' y callback (funcion);
// CRUD = ( CREATE, READ, UPDATE, DELETE )
router.get("/users",  getUsers);
router.get("/users/:id", getUserById )
router.post("/createUser", createUser);

router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser", deleteUser);


export default router
