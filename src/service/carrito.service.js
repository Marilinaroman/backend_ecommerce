import {ContenedorDaoCarrito} from "../daos/index.js"

export const getById = async(id)=>{
    return await ContenedorDaoCarrito.getById(id)
}

export const save = async(body)=>{
    return await ContenedorDaoCarrito.save(body)
}

export const putById = async(id,modificacion)=>{
    return await ContenedorDaoCarrito.putById(id,modificacion)
}


export const deleteById = async(id)=>{
    return await ContenedorDaoCarrito.deleteById(id)
}
