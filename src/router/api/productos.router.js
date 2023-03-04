import express from 'express'
import * as ProductosControllers from '../../controllers/productos.controllers.js'
import { verificaRol } from '../middlewares/auth.prod.middlewares.js'

const router = express.Router()

//http://localhost:8080/api/productos

router.get('/', ProductosControllers.getProdsControllers)

router.get('/:id', ProductosControllers.getProdByIdControllers)

router.get('/genero/:genero', ProductosControllers.getProdByCategoryControllers)

router.get('/imagenes/:id', ProductosControllers.getImgByIdControllers)

router.post('/',verificaRol, ProductosControllers.saveProdController)

router.put('/:id',verificaRol, ProductosControllers.updateProdController)

router.delete('/:id',verificaRol, ProductosControllers.deleteProdController)

router.delete('/',verificaRol, ProductosControllers.deleteAllController)

export {router as ProductosRouter}