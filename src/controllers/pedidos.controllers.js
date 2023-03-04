import { savePedido, getPedidos } from "../service/pedidos.service.js";
import{ logArchivoError, logger} from '../config/logger.js'
import {twilioClient} from '../config/contacto.js'
import { config } from "../config/config.js";

export const getPedidosControllers = async(req,res)=>{
    try{
        const response = await getPedidos()
        res.status(200).send(response)
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}

export const savePedidosController = async(req,res)=>{
    const newPedido = req.body
    try{
        const response = await savePedido(newPedido)
        if(response){
                twilioClient.messages.create(
                    {
                        body:`Se registro un nuevo pedido! nombre: ${response.name}, pedido:${response.id}, email:${response.username}`,
                        from:config.WSP_TWILIO,
                        to:config.WSP_ADMIN
                    },
                    (error)=>{
                        if(error){
                            logArchivoWarn.warn(`Hubo un error al enviar el mensaje de whatsapp al administrador ${error}`)
                        } else {
                            logger.info(`Mensaje de whatsapp de pedido enviado correctamente`)
                        }
                    }
                )
                twilioClient.messages.create(
                    {
                        body:`Registramos un nuevo pedido tuyo! pedido:, email:${response.username}`,
                        from:config.WSP_TWILIO,
                        to:`whatsapp:${newPedido.phone}`
                    },
                    (error)=>{
                        if(error){
                            logger.info(`Hubo un error al enviar el mensaje de whatsapp al cliente ${error}`)
                        } else {
                            logger.info(`Mensaje de whatsapp de pedido enviado correctamente`)
                        }
                    }
                )
                return res.status(200).send(response)
        } else{
            res.status(400).json({message:`Hubo un error ${error}`})
            logArchivoError.error(error)
        }
        
    }catch(error){
        res.status(400).json({message:`Hubo un error ${error}`})
        logArchivoError.error(error)
    }
}