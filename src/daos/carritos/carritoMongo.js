import {ContainerCarritoMongo} from '../../dbOperations/managers/ContenedorCarritoMongo.js'

class CarritoDaosMongo extends ContainerCarritoMongo{
    constructor(collection,schema){
        super(collection,schema)
    }
}
export{CarritoDaosMongo}