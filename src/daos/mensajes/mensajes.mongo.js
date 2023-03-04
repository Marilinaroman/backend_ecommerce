import {MongoContainer} from '../../dbOperations/managers/mongo.manager.js'

class MensajesMongoDao extends MongoContainer{
    constructor(collection,schema){
        super(collection,schema)
    }
}

export {MensajesMongoDao}