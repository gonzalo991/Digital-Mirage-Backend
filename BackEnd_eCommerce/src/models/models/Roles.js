import { Schema, model } from "mongoose";

export const RolesSistem = ['user','admin'];
const RoleSchema = new Schema({
    name: String

},{
    versionKey:false
});

export default model('Role',RoleSchema);