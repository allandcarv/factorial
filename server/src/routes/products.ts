import { Router } from 'express';

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
  updateProductTypeController,
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
import {
  validateNewProductType,
  validateUpdateProductType,
} from '../validators/product-type';
import { validateNewProduct } from '../validators/product';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';

const productsRouter = Router();
const productGroupsRouter = Router();
const productTypesRouter = Router();

productGroupsRouter.get('/groups/:id', getProductGroupController);
productGroupsRouter.get('/groups', getProductGroupsController);
productGroupsRouter.post(
  '/groups',
  validateNewProductGroup,
  fieldsErrorValidation,
  addProductGroupController
);
productGroupsRouter.patch(
  '/groups/:id',
  validateUpdateProductGroup,
  fieldsErrorValidation,
  updateProductGroupController
);

productGroupsRouter.get('/types/:id', getProductTypeController);
productGroupsRouter.get('/types', getProductTypesController);
productGroupsRouter.post(
  '/types',
  validateNewProductType,
  fieldsErrorValidation,
  addProductTypeController
);
productGroupsRouter.patch(
  '/types/:id',
  validateUpdateProductType,
  fieldsErrorValidation,
  updateProductTypeController
);

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

export { productsRouter };
