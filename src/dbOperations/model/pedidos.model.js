import mongoose from 'mongoose'

const pedidosCollection = 'pedidos'

mongoose.set('strictQuery', true)

const pedidosSchema = new mongoose.Schema({
    timestamp:Number,
    username:{
        type:String,
        required:true
    },
    cart:[{
            id:String,
            name:String,
            price:Number,
            quantity:Number
        }],
    total:{
        type: Number,
        required:true
    },
    state:{
        type: String,
        default:'generada',
        required:true
    }
})

export {pedidosSchema, pedidosCollection}