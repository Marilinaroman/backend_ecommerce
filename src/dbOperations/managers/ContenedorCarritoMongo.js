import mongoose from 'mongoose'

class ContainerCarritoMongo {
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

    async save(data){
        try{
            let timestamp = Date.now()
            const newData = await this.model.create({timestamp ,...data})
            return newData
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
    async newId(){
        try{
            let id = new mongoose.Types.ObjectId()
            const newData = await this.model.create( { _id: id })
            return id
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

    async moreProd(id,modificacion){
        try{
            const data = await this.model.findByIdAndUpdate(id, modificacion)
            return data
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
    async deleteOneProd(id,id_prod){
        try{
            const data = await this.model.findByIdAndUpdate({
                "_id": id
                },
                {
                    "$pull": {
                    "productos": {
                        "_id": id_prod
                    }
                    }
                })
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }
    }
}
export{ContainerCarritoMongo}