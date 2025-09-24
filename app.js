import express from 'express'; // module = javascript
// const express = require('express');  commonJs = nodeJs

const app = express();



app.listen(3000, ()=>{
    console.log(`Servidor corriendo en el puerto 3000`)
});
