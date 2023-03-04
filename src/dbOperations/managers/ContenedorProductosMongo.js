import mongoose, {  mongo } from 'mongoose'

class ContainerMongo {
    constructor(dataCollection, dataSchema){
        this.model = mongoose.model(dataCollection, dataSchema)
    }

    async getById(id){
        try{
            const data = await this.model.findById(id)
            return data
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
    async getImgById(id){
        try{
            const data = await this.model.findById(id)
            const url = await data.url
            console.log(url);
            return url
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
    async getAll(){
        try{
            const data = await this.model.find()
            return data
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
    async save(data){
        try{
            const timestamp = Date.now()
            const newData = await this.model.create({timestamp, ...data})
            return newData
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
    async deleteById(id){
        try{
            const data = await this.model.findByIdAndDelete(id)
            return data

        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
    async putById(id,modificacion){
        try{
            const data = await this.model.findByIdAndUpdate(id,modificacion)
            const newData = await this.getById(id)
            return newData
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
    async deleteAll(){
        try {
            await this.model.deleteMany({});
            return {message:"delete successfully"}
        } catch (error) {
            return {message:`Error al borrar todo: ${error}`};
        }
    }
}

export {ContainerMongo}