import express from "express";
import morgan from 'morgan';
const cors = require('cors');
import pkj from '../package.json';
import './database'
import {createRoles, createCategoria} from './libs/initrialSetup'

//import archivo rutas
import userRoutes from './routes/user.routes'
//
const app = express();
app.use(cors({
    origin:"*"
}));
createRoles();//inicializa roles
createCategoria();//inicializa categorias
app.use(morgan('dev'));

app.use(express.json());

;
app.get('/', (req,res)=>{
    res.json({
        "name": pkj.name,
        "version": pkj.version,
        "description": pkj.description,
        "author":pkj.author

    });
})

//llamo a la rutas
 app.use('/user',userRoutes);
 //

export default app;