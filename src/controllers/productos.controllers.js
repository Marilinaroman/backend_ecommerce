import { getProd, getProdById, saveProd, deleteProd, updateProd, deleteAll,getImgById } from "../service/productos.service.js"; 
import { logArchivoError } from "../config/logger.js";

export const getProdsControllers = async(req,res)=>{
    try{
        const response = await getProd()
        res.status(200).send(response)
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const getProdByCategoryControllers = async(req,res)=>{
    const {genero} = req.params
    console.log(genero);
    try{
        const response = await getProd()
        const data = response.filter((e)=>e.genero === genero)
        if(data){
            res.status(200).send(data)
        }else{
            res.status(404)
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const getProdByIdControllers = async(req,res)=>{
    const {id} = req.params
    try{
        const response = await getProdById(id)

        if(response){
            return res.status(200).send(response)
        }else{
            return res.send("el producto no existe")
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const getImgByIdControllers = async(req,res)=>{
    const {id} = req.params
    try{
        const response = await getImgById(id)

        if(response){
            return res.status(200).send(response)
        }else{
            return res.send("el producto no existe")
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}
export const saveProdController = async(req,res)=>{
    const newProd = req.body
    try{
        const data = await saveProd(newProd)
        const response = await getProd()
        res.status(200).send(response)
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const updateProdController = async(req,res)=>{
    const {id} = req.params
    const modificacion = req.body
    try{
        const existe = await getProdById(id)
        
        if (!existe){
            return res.status(404).send({ message: 'Error el producto no existe' })
        } else{
            const prod = await updateProd(id,modificacion)
            return res.status(200).send(prod)
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}
export const deleteProdController = async(req,res)=>{
    const {id} = req.params
    try{
        const existe = await getProdById(id)
        
        if (!existe){
            return res.status(404).send({ message: 'Error el producto no existe' })
        } else{
            const prod = await deleteProd(id)
            res.status(200).send(prod)
        }
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const deleteAllController = async(req,res)=>{
    try{
        const response = await deleteAll()
        res.status(200).send('se elimino todo')
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}