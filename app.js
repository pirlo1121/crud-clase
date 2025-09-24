import express from 'express'; // module = javascript
import { connectDB } from './src/config/db.config.js';
// const express = require('express');  commonJs = nodeJs

const app = express();

connectDB();

app.listen(3000, ()=>{
    console.log(`Servidor corriendo en el puerto 3000`)
});
