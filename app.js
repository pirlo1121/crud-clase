import express from 'express'; // module = javascript
import { connectDB } from './src/config/db.config.js';
// const express = require('express');  commonJs = nodeJs
import { configDotenv } from 'dotenv';
import router from './src/routes/users.routes.js'


configDotenv()
const app = express();

app.use( express.json() );

connectDB();


app.use( router )




const port = process.env.PORT
app.listen(port, ()=>{
    // console.log(`Servidor corriendo en el puerto ${port}`)
    console.log('Servidor corriendo en el puerto', port)

});
