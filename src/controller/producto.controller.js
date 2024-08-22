import Producto from '../models/Producto.js';
import Categoria from '../models/Categoria.js';

export const newProducto = async (req, res) => {
  const { categoria, modelo, marca, descripcion, stock, precio, url_image } = req.body;
  const categoriasDB = await Categoria.find({ name: categoria });


  let produc = new Producto({

    modelo,
    marca,
    descripcion,
    stock,
    precio,
    categoria: categoriasDB.map((cat) => cat._id),
    url_image
  });
  let productExist = await Producto.find({ modelo: modelo })

  if (!productExist.length == 0) return res.json({ message: 'El modelo ya existe' })

  await produc.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

export const getProductos = async (req, res) => {
  await Producto.find()
    .populate('categoria')
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

export const getProductByKeyword = async (req, res) => {
  try {
    const { keyword } = req.params;
    const regex = new RegExp(keyword, 'i');
    const productos = await Producto.find({
      $or: [
        { marca: { $regex: regex } },
        { modelo: { $regex: regex } }
      ]
    });
    res.status(200).json(productos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al realizar la búsqueda' });
  }
}

export const getProductoById = async (req, res) => {
  const { productoId } = req.params;
  await Producto.findById(productoId)
    .populate('categoria')
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

export const deleteProducto = async (req, res) => {
  const { productoId } = req.params;

  await Producto.findByIdAndDelete(productoId)
    .then(() => res.status(201).json({ message: `Producto ${productoId} eliminado` }))
    .catch((error) => res.json({ message: error }));
}

export const updateProducto = async (req, res) => {

  const { _id, categoria, modelo, marca, descripcion, stock, precio, url_image } = req.body;
  const categoriasDB = await Categoria.find({ name: categoria });

  await Producto.findByIdAndUpdate(_id,
    {
      $set:
      {
        modelo: modelo,
        marca: marca,
        descripcion: descripcion,
        stock: stock,
        precio: precio,
        categoria: categoriasDB.map((cat) => cat._id),
        url_image: url_image

      }
    }, { new: true })
    .then(() => res.status(201).json({ message: `Producto ${modelo} actualizado` }))
    .catch((error) => res.json({ message: error }));

}