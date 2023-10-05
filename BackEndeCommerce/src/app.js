import express from "express";
import morgan from 'morgan';
const cors = require('cors');
import pkj from '../package.json';
import './database'
import {createRoles, createCategoria} from './libs/initrialSetup'

//import archivo rutas

import userRoutes from './routes/user.routes'
import categoriaRoutes from './routes/categorias.router'
import productosRoutes from './routes/producto.router'
//
const app = express();
// app.use(cors({
//     origin:"*"
// }));
app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Acces-Control-Allow-Headers','Content-Type');
    next();
})
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
 app.use('/user',userRoutes);categoriaRoutes
app.use('/categorias',categoriaRoutes)
 app.use('/productos',productosRoutes);
 //

export default app;