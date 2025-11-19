import express from 'express'
import { deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.controllers.js';
import { createUser, login } from '../controllers/auth.controllers.js';
const router = express.Router();

// cada ruta recibe 'nombre/ruta' y callback (funcion);
// CRUD = ( CREATE, READ, UPDATE, DELETE )

// user 
router.get("/users",  getUsers);
router.get("/users/:id", getUserById )
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);


// auth
router.post("/createUser", createUser);
router.post("/login", login);



export default router
