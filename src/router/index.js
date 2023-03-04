import express from "express";
import { ProductosRouter } from "./api/productos.router.js";
import { ProductosTestRouter } from "./api/productosTest.router.js";
import { InfoRouter } from "./api/info.router.js";
import { UserRouter } from "./api/user.router.js"; 
import { graphiqlRouter } from "./api/user.graphql.router.js";
import { CarritoRouter } from "./api/carrito.router.js";
import { PedidosRouter } from "./api/pedidos.router.js";
import { MensajesRouter } from "./api/mensajes.router.js";
const router = express.Router()

router.use('/productos', ProductosRouter)
router.use('/carrito', CarritoRouter)
router.use('/pedidos',PedidosRouter)
router.use('/chat', MensajesRouter)
router.use('/info', InfoRouter)
router.use('/test',ProductosTestRouter)
router.use('/user', UserRouter)
router.use('/graphql', graphiqlRouter)

export {router as apiRouter}