import { getById, save, putById, deleteById } from "../service/carrito.service.js";
import { logger, logArchivoError, logArchivoWarn } from '../config/logger.js';

export const getByIdControllers = async(req,res) =>{
    const {id} = req.params
    try {
        const response = await getById(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const saveControllers= async(req,res) =>{
    const {id} = req.params
    const data = req.body
    try {
        if(!id){
            const response = await save(data)
            res.status(200).send(response)
        } else{
            const response = await putById(id,data)
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const deleteByIdControllers= async(req,res) =>{
    const {id} = req.params
    try {
        const response = await deleteById(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}


