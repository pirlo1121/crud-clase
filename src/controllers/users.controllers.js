

export async function getUsers(req, res) {
    try {
        res.send('TODOS LOS USUARIOS')
    } catch (error) {
        console.log(error)
    }
}

export async function createUser(req, res) {
    try {
        res.send('USUARIO CREADO')
    } catch (error) {
        console.log(error)
    }
}

export async function updateUser(req, res) {
    try {
        res.send('USUARIO ACTUALIZADO')
    } catch (error) {
        console.log(error)
        
    }
}

export async function deleteUser(req,res) {
    try {
        res.send('USUARIO ELIMINADO');
    } catch (error) {
        console.log(error);
        
    }
}