import express from 'express'; // module = javascript
import { connectDB } from './src/config/db.config.js';
// const express = require('express');  commonJs = nodeJs
import { configDotenv } from 'dotenv';
configDotenv()


const app = express();

connectDB();
const port = process.env.PORT

app.listen(port, ()=>{
    // console.log(`Servidor corriendo en el puerto ${port}`)
    console.log('Servidor corriendo en el puerto', port)

});
