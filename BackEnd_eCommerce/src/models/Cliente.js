import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const clienteSchema = new Schema({
    nombre:{
        type: String,
        require: true,       
        
    },
    apellido:{
        type: String,
        require: true
        
    },
    username:{
        type: String,
        require: true,
        index: { unique: true }         
    },
    password:{
        type: String,
        require: true
        
    },
    email:{
        type: String,
        require: true
    },    
    
    enable:{
        type: Boolean,
        require: true
    },
    token:{
        type: String,
        require: true
        
    }    

},{timestamps:true ,
    versionKey:false});

clienteSchema.statics.encrypPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);   
    return await bcrypt.hash(password,salt);
}


clienteSchema.statics.comparePassword = async (password, receivePassword) =>{
    return await bcrypt.compare(password, receivePassword);

}
export default model("Cliente", clienteSchema);