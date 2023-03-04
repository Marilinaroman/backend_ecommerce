// verificacion de rol
let rol = 'admin'

export const verificaRol = (req,res,next) =>{
    if(rol === 'admin'){
        next()
    } else{
        res.send('no tienes acceso a esta ruta')
    }
}