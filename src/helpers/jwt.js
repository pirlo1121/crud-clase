import e from 'express';
import jwt from'jsonwebtoken'

export function createToken(payload) {

    try {
        const key = process.env.JWT_KEY;
        const token = jwt.sign(payload, key, {expiresIn: "1h"});
        return token;
    } catch (error) {
        console.log(error);
    }
    
}

export function decodeToken(token) {
    try {
        const key = process.env.JWT_KEY; 
        const decoded = jwt.verify(token, key);
        return { ok: true, payload: decoded }; 
    } catch (error) {
        console.error('Error al decodificar el token:', error.message);
        console.log(error)
        return { ok: false, error: error.message }; 
    }
}

