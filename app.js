import express from 'express'; // module = javascript
import { connectDB } from './src/config/db.config.js';
// const express = require('express');  commonJs = nodeJs
import { configDotenv } from 'dotenv';
import userRoutes from './src/routes/users.routes.js'
import productsRoutes from './src/routes/products.routes.js';
import cors from 'cors' 
import voteRoutes from './src/routes/votes.routes.js';

configDotenv()
const app = express();
app.use( cors()); 

app.use( express.json() ); // parsear JSON

connectDB();


app.use( userRoutes )
app.use( productsRoutes )
app.use( voteRoutes )

// http://localhost:3000/
// http://168.192.1.10:3000/





const port = process.env.PORT
app.listen(port, ()=>{
    // console.log(`Servidor corriendo en el puerto ${port}`)
    console.log('Servidor corriendo en el puerto', port)

});
