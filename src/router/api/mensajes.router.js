import express from 'express'
import * as MensajesControllers from '../../controllers/mensajes.controllers.js'
const router = express.Router()

//http://localhost:8080/api/chat

router.get('/:id', MensajesControllers.getMensajesControllers)
router.post('/', MensajesControllers.putMensajesControllers)
router.post('/:id', MensajesControllers.putMensajesControllers)
router.delete('/:id', MensajesControllers.deleteMensajesControllers)

export {router as MensajesRouter}