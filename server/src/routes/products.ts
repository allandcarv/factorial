import { Router, Request, Response } from 'express';

import {
  addProductGroupController,
  getProductGroupController,
  getProductGroupsController,
  updateProductGroupController,
} from '../controllers/product-groups';
import {
  addProductTypeController,
  getProductTypeController,
  getProductTypesController,
} from '../controllers/product-types';
import {
  addProductController,
  getProductController,
  getProductsController,
} from '../controllers/product';
import {
  validateNewProductGroup,
  validateUpdateProductGroup,
} from '../validators/product-group';
import { validateNewProductType } from '../validators/product-type';
import { validateNewProduct } from '../validators/product';

const productsRouter = Router();
const productGroupsRouter = Router();
const productTypesRouter = Router();

productGroupsRouter.get('/groups/:id', getProductGroupController);
productGroupsRouter.get('/groups', getProductGroupsController);
productGroupsRouter.post(
  '/groups',
  validateNewProductGroup,
  addProductGroupController
);
productGroupsRouter.patch(
  '/groups/:id',
  validateUpdateProductGroup,
  updateProductGroupController
);

productGroupsRouter.get('/types/:id', getProductTypeController);
productGroupsRouter.get('/types', getProductTypesController);
productGroupsRouter.post(
  '/types',
  validateNewProductType,
  addProductTypeController
);

productsRouter.use('/products', productGroupsRouter);
productsRouter.use('/products', productTypesRouter);
productsRouter.get('/products/:id', getProductController);
productsRouter.get('/products', getProductsController);
productsRouter.post('/products', validateNewProduct, addProductController);

export { productsRouter };
