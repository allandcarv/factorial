import { Router } from 'express';
import { productGroupsController } from '../controllers/product-groups';
import { productTypesController } from '../controllers/product-types';
import { productsController } from '../controllers/product';

const productsRouter = Router();
const productGroupsRouter = Router();
const productTypesRouter = Router();

productGroupsRouter.get('/groups', productGroupsController);
productGroupsRouter.get('/types', productTypesController);

productsRouter.use('/products', productGroupsRouter);
productsRouter.use('/products', productTypesRouter);
productsRouter.get('/products', productsController);

export { productsRouter };
