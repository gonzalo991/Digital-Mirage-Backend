import Categoria from '../models/Categoria.js';

export const newCategoria = async (req, res) => {
  const { name } = req.body;
  const newCategoria = {
    "name": `${name}`
  };
  let nameExist = await Categoria.find(newCategoria)
  console.log(nameExist)
  if (!nameExist.length == 0) return res.json({ message: 'La Categoria ya existe' })
  const categoria = new Categoria(newCategoria);
  await categoria.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}


export const getCategorias = async (req, res) => {
  await Categoria.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

export const deleteCategorias = async (req, res) => {
  const { categoriaId } = req.params;
  await Categoria.findByIdAndDelete(categoriaId)
    .then(() => res.status(201).json({ message: `Categoria ${name} eliminada` }))
    .catch((error) => res.json({ message: error }));

}

export const getCategoriaByName = async (req, res) => {
  try {
    const { name } = req.params; // Extraer correctamente el parámetro 'name' de la URL
    const response = await Categoria.find({ name: name }); // Buscar la categoría por nombre

    if (response.length > 0) { // Verificar si se encontraron categorías
      return res.json(response); // Devolver las categorías encontradas
    } else {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
  } catch (err) {
    console.error("Error al buscar la categoría:", err); // Loguear el error correctamente
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const updateCategorias = async (req, res) => {
  try {
    const { id } = req.params;
    const name = req.body;
    const response = await Categoria.findByIdAndUpdate(id, { name: name })
      .then(() => res.status(201).json({ message: `Categoria ${name} actualizada` }))
      .catch((error) => res.json({ message: error }));
    res.status(200).json(response);
  } catch (err) {
    console.error(err("Error al actualizar la categoria"));
    res.status(500).json({ message: "No se pudo actualizar el nombre de la categoria" });
  }

}