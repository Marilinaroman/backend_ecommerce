import {ContenedorDaoProductos} from "../daos/index.js"

export const getProd = async()=>{
    return await ContenedorDaoProductos.getAll()
}
export const getProdById = async(id)=>{
    return await ContenedorDaoProductos.getById(id)
}
export const saveProd = async(body)=>{
    return await ContenedorDaoProductos.save(body)
}
export const deleteProd = async(id)=>{
    return await ContenedorDaoProductos.deleteById(id)
}
export const updateProd = async(id, body)=>{
    return await ContenedorDaoProductos.putById(id, body)
}

export const getImgById = async(id, body)=>{
    return await ContenedorDaoProductos.getImgById(id)
}
export const deleteAll = async()=>{
    return await ContenedorDaoProductos.deleteAll()
}