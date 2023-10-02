import	Categoria from '../models/Categoria';

export const newCategoria = async (req, res )=>{
    const {name} = req.body;
    const nameExist = await Categoria.find({name:name})
    if(nameExist) return res.json({message: 'La Categoria ya existe'})
        const newCat = categoriaSchema(name);
    await newCat.save()
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}

export const getCategorias = async (req, res )=>{
   await Categoria.find()
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const deleteCategorias = async (req, res )=>{
    const {name} = req.body;
    await Categoria.deleteOne({ name: name })
                .then(()=> res.status(201).json({message : `Categoria ${name} eliminada`}))
                .catch((error)=> res.json({message : error})) ; 

}
export const updateCategorias = async (req, res )=>{
        const {id, name} = req.body;        
    await Categoria.findByIdAndUpdate(id, { name: name })
                .then(()=> res.status(201).json({message : `Categoria ${name} actualizada`}))
                .catch((error)=> res.json({message : error})) ; 
}