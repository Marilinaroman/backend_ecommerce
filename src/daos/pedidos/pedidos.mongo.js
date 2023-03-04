import {MongoContainer} from '../../dbOperations/managers/mongo.manager.js'

class PedidosMongoDao extends MongoContainer{
    constructor(collection,schema){
        super(collection,schema)
    }
}

export {PedidosMongoDao}