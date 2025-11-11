import { decodeToken } from "../helpers/jwt.js";

export function verifyToken(req, res, next){

    const token = req.headers.authorization?.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ 
            ok: false, 
            message: 'Token no proporcionado' 
        });
    }

    const result = decodeToken(token);

    if (!result.ok) {
        return res.status(403).json({ 
            ok: false, 
            message: 'Token inválido o expirado', 
            error: result.error 
        });
    }

    req.user = result.payload;
    next(); 

}

export function isAdmin(req, res, next) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'No autenticado.' });
    }

    if (req.user.userFound.role !== 'admin') {
      return res.status(403).json({ error: 'Acceso denegado. Solo administradores.' });
    }

    next(); // usuario autorizado
  } catch (err) {
    console.error('Error en isAdmin middleware:', err);
    console.log(err)
    res.status(500).json({ error: 'Error interno.' });
  }
}

