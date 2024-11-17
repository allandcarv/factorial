import { Router, Request, Response } from 'express';

import {
  addProductGroupController,
  productGroupController,
  productGroupsController,
} from '../controllers/product-groups';
import {
  productTypeController,
  productTypesController,
} from '../controllers/product-types';
import { productController, productsController } from '../controllers/product';
import { validateNewProductGroup } from '../validators/product-group';

const productsRouter = Router();
const productGroupsRouter = Router();
const productTypesRouter = Router();

productGroupsRouter.get('/groups/:id', productGroupController);
productGroupsRouter.get('/groups', productGroupsController);
productGroupsRouter.post(
  '/groups',
  validateNewProductGroup,
  addProductGroupController
);

productGroupsRouter.get('/types/:id', productTypeController);
productGroupsRouter.get('/types', productTypesController);

productsRouter.use('/products', productGroupsRouter);
productsRouter.use('/products', productTypesRouter);
productsRouter.get('/products/:id', productController);
productsRouter.get('/products', productsController);

export { productsRouter };
