import { config } from './config.js';
import ParsedArgs  from "minimist";

const objArgs = ParsedArgs(process.argv.slice(2),{
    alias:{
        p: 'port',
        m: 'mode',
        e: 'env',
    },
    default:{
        port: 8080,
        mode: 'FORK',
        env: 'DEV'
    }
});


export const options = {
    server:{
        PORT: objArgs.port,
        MODE: objArgs.mode,
        NODE_ENV: objArgs.env,
    },

    mariaDb:{
        client:'mysql',
        connection:{
            host: config.MARIADB_HOST,
            user: 'root',
            password:'',
            database:'ecommerce'
        }
    },
    mongo:{
        url: objArgs.env === 'TEST' ? config.MONGO_TEST : config.MONGO_DB
    }
}
