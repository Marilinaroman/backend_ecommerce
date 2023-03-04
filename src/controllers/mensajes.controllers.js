import { getMensajes, putMensajes, deleteMensajes, newMensajes } from "../service/mensajes.service.js";
import {logArchivoError} from '../config/logger.js'

export const getMensajesControllers= async(req,res)=>{
    const {id} = req.params
    try {
        const response = await getMensajes(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const putMensajesControllers= async(req,res)=>{
    const {id} = req.params
    const body = req.body
    
    try {
        if(!id){
            const response = await newMensajes(body)
            res.status(200).send(response)
        } else{
            const response = await putMensajes(id, body)
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}
export const deleteMensajesControllers= async(req,res)=>{
const {id} = req.params
    try {
        const response = await deleteMensajes(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}