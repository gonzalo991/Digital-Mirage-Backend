import express from "express";
import morgan from 'morgan';
const cors = require('cors');
import pkj from '../package.json';
import './database'
import {createRoles} from './libs/initrialSetup'
const bodyParser = require('body-parser');



const app = express();
app.use(cors({
    origin:"*"
}));
createRoles();
app.use(morgan('dev'));


app.use(bodyParser.json({limit: "50mb", strict: true}));
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


export default app;