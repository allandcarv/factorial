import { Router } from 'express';

import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import {
  validateNewProduct,
  validateUpdateProduct,
} from '../validators/product';
import {
  addProductController,
  deleteProductController,
  getProductController,
  getProductsController,
  getRestrictedProductsController,
  updateProductController,
} from '../controllers/product';
import {
  productIdValidator,
  updateParamsValidator,
} from '../middlewares/product';

const productsRouter = Router();

productsRouter.get('/products/:id', productIdValidator, getProductController);
productsRouter.get(
  '/products/:id/restricted-products',
  productIdValidator,
  getRestrictedProductsController
);
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
  productIdValidator,
  updateParamsValidator,
  updateProductController
);

productsRouter.delete(
  '/products/:id',
  productIdValidator,
  deleteProductController
);

export { productsRouter };
