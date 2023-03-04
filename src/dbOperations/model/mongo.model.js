import mongoose, { mongo } from 'mongoose'

const productosCollection = "productos"
const carritosCollection = "carritos"

const productosSchema = new mongoose.Schema({
    name:String,
    price:Number,
    timestamp:Number,
    genero:String,
    stock:Number,
    url:String
})

const carritosSchema = new mongoose.Schema({
    timestamp:Number,
    products:[{
        id:String,
        name:String,
        price:Number,
        quantity:Number,
        url:String
    }]
})

export {productosSchema,productosCollection,carritosSchema,carritosCollection}