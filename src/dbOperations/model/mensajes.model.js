import mongoose from 'mongoose'

const mensajesCollection = 'mensajes'

mongoose.set('strictQuery', true)

const mensajesSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    text:[{
        hour:String,
        state: String,
        sms:String
        
    }]
})

export {mensajesSchema, mensajesCollection}