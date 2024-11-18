import { Router } from 'express';

import { fieldsErrorValidation } from '../../middlewares/fields-error-validation';
import {
  validateNewProduct,
  validateUpdateProduct,
} from '../../validators/product';
import {
  addProductController,
  getProductController,
  getProductsController,
  updateProductController,
} from '../../controllers/product';
import { productGroupsRouter } from './product-group';
import { productTypesRouter } from './product-type';

const productsRouter = Router();

productsRouter.use('/products', productGroupsRouter);
productsRouter.use('/products', productTypesRouter);

productsRouter.get('/products/:id', getProductController);
productsRouter.get('/products', getProductsController);
productsRouter.post(
  '/products',
  validateNewProduct,
  fieldsErrorValidation,
  addProductController
);
productsRouter.patch(
  '/products/:id',
  validateUpdateProduct,
  fieldsErrorValidation,
  updateProductController
);

export { productsRouter };
