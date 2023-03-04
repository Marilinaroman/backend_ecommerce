import mongoose, {  mongo } from 'mongoose'

class MongoContainer{
        constructor(dataCollection, dataSchema){
            this.model = mongoose.model(dataCollection, dataSchema)
        }

    async getById(id){
        try {
            const object = await this.model.findById(id);
            if(!object){
                return {message:`Error al buscar: no se encontró el id ${id}`, error:true};
            } else {
                return object;
            }
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async getAll(){
        try {
            const objects = await this.model.find();
            return objects
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async save(body){
        try {
            const object = await this.model.create(body);
            return object
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async updateById(body, id){
        try {
            await this.model.findByIdAndUpdate(id, body,{new:true});
            return {message:"Update successfully"}
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async updateByIdMsj(body, id){
        try {
            const msjAnteriores = await this.getById(id)
            let hour = new Date()
            let newBody = {hour, ...body}
            const data = await this.model.findByIdAndUpdate({
                "_id": id
                },
                {
                    "$push":{
                        "text": {
                            ...msjAnteriores.text,
                            ...newBody
                        }
                    }
                    
                })
                return data
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }
    
    async deleteById(id){
        try {
            await this.model.findByIdAndDelete(id);
            return {message:"delete successfully"};
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async deleteAll(){
        try {
            await this.model.delete({});
            return {message:"delete successfully"}
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async findOne(username){
        try{
            const user = await this.model.findOne(
                {username})
            return user
        }catch(err){
            throw new Error(`Hubo un error ${err}`);
        }

    }
}

export {MongoContainer}