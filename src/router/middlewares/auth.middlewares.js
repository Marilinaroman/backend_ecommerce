import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import { transporterContacto } from '../../config/contacto.js'
import { userSchema, usersCollection } from '../../dbOperations/model/users.model.js'
import {mongoose} from 'mongoose'
import {logger} from '../../config/logger.js'
import { config } from '../../config/config.js'

const UserModel = mongoose.model(usersCollection,userSchema)
//serializar
passport.serializeUser((user,done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    UserModel.findById(id,(error, userFound)=>{
        if(error) return done(error)
        return done(null,userFound)
    })
})

//crear una funcion para encriptar la contraseñas;
const createHash = (password)=>{
    const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    return hash;
}
//Validar contraseña
const isValidPassword = (user, password)=>{
    return bcrypt.compareSync(password, user.password);
}

//passport strategy crear usuario
const signupStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, username, password, done)=>{
    logger.info(password);
    UserModel.findOne({username:username}, (error,userFound)=>{
        if (error) return done(error,null,{message:'hubo un error'})
        if(userFound) return done(null,null,{message:'el usuario existe'}) 
        const newUser = {
            name: req.body.name,
            address: req.body.address,
            age: req.body.age,
            phone: req.body.phone,
            photo: req.body.photo,
            username:username,
            password:createHash(password)
        }
        
        let detalleEmail=`<div>
            <h1>Se registro un nuevo usuario/a</h1>
            <div> 
                <p>name: ${newUser.name}</p>
                <p>address: ${newUser.address}</p>
                <p>phone: ${newUser.phone}</p>
                <p>email: ${newUser.username}</p>
            </div>
            </div>`


        logger.info(newUser)

        UserModel.create(newUser, (error,userCreated)=>{
            if(error) return done(error,null, {message:'error al registrar'})
            return done(null, userCreated,{message:'usuario creado'})
        })

        const response = transporterContacto.sendMail({from:"Servidor de NodeJs",
        to:config.TEST_EMAIL,
        subject:'Nuevo registro',
        html: detalleEmail})

        logger.info(`Aviso enviado`)
        })
})


// passport strategy iniciar sesion
const loginStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, username, password, done)=> {
        logger.info(username);
        UserModel.findOne({ username: username}, (err, user)=> {
        logger.info(user);
            if (err) return done(err);
            if (!user) return done(null, false);
            if (!user.password) return done(null, false);
            if (!isValidPassword(user,password)){
                logger.info('existen datos')
                return done(null,false,{message:'password invalida'})
            }
            return done(null, user);
        });
    }
)



export {
    loginStrategy,
    signupStrategy
}