import express from 'express'
import * as PedidosControllers from '../../controllers/pedidos.controllers.js'
const router = express.Router()

//http://localhost:8080/api/pedidos

router.post('/', PedidosControllers.savePedidosController)
router.get('/', PedidosControllers.getPedidosControllers)

export {router as PedidosRouter}