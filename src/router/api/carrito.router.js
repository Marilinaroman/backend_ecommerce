import express from 'express'
import * as CarritoControllers from '../../controllers/carrito.controllers.js'
const router = express.Router()

//http://localhost:8080/api/carrito

router.get('/:id', CarritoControllers.getByIdControllers)

router.post('/:id', CarritoControllers.saveControllers)

router.post('/', CarritoControllers.saveControllers)

router.delete('/:id', CarritoControllers.deleteByIdControllers)


export{ router as CarritoRouter }

