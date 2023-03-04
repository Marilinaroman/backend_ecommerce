import mongoose from 'mongoose';
import {options} from '../config/options.js';
import { PedidosMongoDao } from './pedidos/pedidos.mongo.js';

let ContenedorDaoProductos
let ContenedorDaoCarrito
let ContenedorDaoUser
let ContenedorDaoPedidos
let ContenedorDaoMensajes

let databaseType = 'mongo'


switch(databaseType){
    case "mongo":

        const URL = options.mongo.url
        
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch((error)=>{
            if(error) throw new Error(`conexion fallida ${error}`)
            console.log('conexion exitosa');}
        )
            


        //Productos
        const {ProductosDaosMongo} = await import('./productos/productosMongo.js')
        const {productosSchema} = await import('../dbOperations/model/mongo.model.js')
        const {productosCollection} = await import('../dbOperations/model/mongo.model.js')
        ContenedorDaoProductos = new ProductosDaosMongo(productosCollection,productosSchema)

        //Carrito
        const {CarritoDaosMongo} = await import('./carritos/carritoMongo.js')
        const {carritosSchema} = await import('../dbOperations/model/mongo.model.js')
        const {carritosCollection} = await import('../dbOperations/model/mongo.model.js')
        ContenedorDaoCarrito = new CarritoDaosMongo(carritosCollection,carritosSchema)

        //Users
        const{UserMongoDao} = await import('./users/usersMongo.js')
        const {userSchema} = await import('../dbOperations/model/users.model.js')
        const {usersCollection} = await import('../dbOperations/model/users.model.js')
        ContenedorDaoUser = new UserMongoDao(usersCollection,userSchema)

        //Pedidos
        const {PedidosMongoDao} = await import('./pedidos/pedidos.mongo.js')  
        const {pedidosSchema} = await import('../dbOperations/model/pedidos.model.js')  
        const {pedidosCollection} = await import('../dbOperations/model/pedidos.model.js')  
        ContenedorDaoPedidos = new PedidosMongoDao(pedidosCollection,pedidosSchema)  
        //Mensajes
        const {MensajesMongoDao} = await import('./mensajes/mensajes.mongo.js')
        const {mensajesSchema} = await import('../dbOperations/model/mensajes.model.js')  
        const {mensajesCollection} = await import('../dbOperations/model/mensajes.model.js')  
        ContenedorDaoMensajes = new MensajesMongoDao(mensajesCollection,mensajesSchema)
        break;

    case "mariaDb":
        const {CarritoDaosMariaDb} = await import('./carritos/carritoMariaDb.js')
        const {ProductosDaosMariaDb} =await import('./productos/productosMariaDb.js')
        ContenedorDaoProductos = new ProductosDaosMariaDb(options.mariaDb,'productos')
        ContenedorDaoCarrito = new CarritoDaosMariaDb(options.mariaDb,'carrito')
        break;

}



export {ContenedorDaoProductos, ContenedorDaoCarrito, ContenedorDaoUser, ContenedorDaoPedidos, ContenedorDaoMensajes}