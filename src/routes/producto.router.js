import { Router } from "express";
const router = Router();

import * as productoCtrl from '../controller/producto.controller'


router.post('/', productoCtrl.newProducto);
router.get('/', productoCtrl.getProductos);
router.get('/byid/:productoId', productoCtrl.getProductoById);
router.get('/:categoria', productoCtrl.getProductoByCategoria);
router.get('/buscar/:keyword', productoCtrl.getProductByKeyword);
router.delete('/:productoId', productoCtrl.deleteProducto);
router.put('/', productoCtrl.updateProducto);

export default router;