import	User from '../models/User';
import	Role from '../models/Roles';
import jwt from 'jsonwebtoken';

export const singnup = async (req, res )=>{
    const { username, password, nombre, apellido, roles} = req.body;
    
    const roleDB = await Role.find({name : roles});
    console.log(roleDB);
     // creating a new User
     const user = new User({
        username,
        nombre,
        password,
        apellido,       
        roles: roleDB.map((role) => role._id),
      });
  
    user.password = await User.encrypPassword(user.password);
    user.enable = true;
    console.log(user);
    const saveUser =  await user.save();
                    
   const token =  jwt.sign({id:saveUser._id},config.SECERET,{expiresIn:86400});
   saveUser.password = null;   
   saveUser.token = token;
   res.json(saveUser);
}