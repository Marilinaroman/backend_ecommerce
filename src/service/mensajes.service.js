import { ContenedorDaoMensajes } from "../daos/index.js";

export const getMensajes= async(id)=>{
    return await ContenedorDaoMensajes.getById(id)
}
export const newMensajes= async(body)=>{
    return await ContenedorDaoMensajes.save(body)
}
export const putMensajes= async(id, body)=>{
    return await ContenedorDaoMensajes.updateByIdMsj(body, id)
}
export const deleteMensajes= async(id)=>{
    return await ContenedorDaoMensajes.deleteById(id)
}