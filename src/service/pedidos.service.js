import { ContenedorDaoPedidos } from "../daos/index.js";

export const savePedido = async(body)=>{
    return await ContenedorDaoPedidos.save(body)
}

export const getPedidos = async(body)=>{
    return await ContenedorDaoPedidos.getAll()
}