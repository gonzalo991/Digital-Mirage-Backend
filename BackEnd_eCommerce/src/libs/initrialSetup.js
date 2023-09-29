import { Promise } from 'mongoose';
import Role from '../models/Roles'

export const createRoles = async () => {
    try{
        const count = await Role.estimatedDocumentCount();
        if(count > 0) return;
  
       const role1 = await new Role({name: "admin"}).save();
       const role2 = await new Role({name: "user"}).save();
        const role3 = await new Role({name: "client"}).save();
        console.log(role1,role2, role3);
        }catch(error){
        console.log(error);
    }
}