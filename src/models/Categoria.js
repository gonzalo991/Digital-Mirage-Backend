import { Schema, model } from "mongoose";
//Coleccion para clsicar los productos : "smartphone", "notebook" 

const categoriaSchema = new Schema({
    name: {type: String}
},{
    versionKey:false
});

export default model('Categoria',categoriaSchema);