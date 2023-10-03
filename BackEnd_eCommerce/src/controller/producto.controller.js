import	Producto from '../models/Producto.js';

export const newProducto = async (req, res )=>{
        const {categoria, modelo, marca, descripcion, stock, precio} = req.body;
        const categoriasDB = await Role.find({name : categoria});
    
    
     const produc = new Producto({    

        modelo,
        marca,
        descripcion, 
        stock,  
        precio,     
        categoria: categoriasDB.map((cat) => cat._id),
      });
    let productExist = await produc.find({modelo: modelo})
 
    if(!productExist.length == 0) return res.json({message: 'El modelo ya existe'})
    
    await produc.save()
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getProductos = async (req, res )=>{
    await Producto.find()
                .populate('categorias')
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getProductoById = async (req, res )=>{
     const {productoId} = req.params; 
     await Producto.find(productoId)
                .populate('categorias')
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getProductoByCategoria = async (req, res )=>{
         const {categoria} = req.params; 
          const busqueda = 
        {categorias: { $in : categoria } };
         await Producto.find(busqueda)
                .populate('categorias')
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const deleteProducto = async (req, res )=>{
       const {productoId} = req.params;
       
    await  Producto.findByIdAndDelete(productoId)
                .then(()=> res.status(201).json({message : `Producto ${productoId} eliminado`}))
                .catch((error)=> res.json({message : error})) ; 
}
export const updateProducto = async (req, res )=>{
    
    const {productoId} = req.params;  
    const productoSchema = new Producto(req.body);      
    await Producto.findByIdAndUpdate(productoId,  productoSchema,{new:true})
                .then(()=> res.status(201).json({message : `Producto ${productoSchema.modelo} actualizado`}))
                .catch((error)=> res.json({message : error})) ; 

}