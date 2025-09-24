

export async function getUsers(req, res) {
    try {
        res.send('TODOS LOS USUARIOS')
    } catch (error) {
        console.log(error)
    }
}