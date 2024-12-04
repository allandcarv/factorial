import { Router } from 'express';

import {
  getProductTypeController,
  getProductTypesController,
  addProductTypeController,
  updateProductTypeController,
  getProductsByTypeController,
  deleteProductTypeController,
} from '../controllers/product-type';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import {
  validateNewProductType,
  validateUpdateProductType,
} from '../validators/product-type';
import {
  productTypeIdValidator,
  updateParamsValidator,
} from '../middlewares/product-type';

const productTypesRouter = Router();

productTypesRouter.get(
  '/product-types/:id/products',
  productTypeIdValidator,
  getProductsByTypeController
);
productTypesRouter.get(
  '/product-types/:id',
  productTypeIdValidator,
  getProductTypeController
);
productTypesRouter.get('/product-types', getProductTypesController);

productTypesRouter.post(
  '/product-types',
  validateNewProductType,
  fieldsErrorValidation,
  addProductTypeController
);

productTypesRouter.patch(
  '/product-types/:id',
  validateUpdateProductType,
  fieldsErrorValidation,
  productTypeIdValidator,
  updateParamsValidator,
  updateProductTypeController
);

productTypesRouter.delete(
  '/product-types/:id',
  productTypeIdValidator,
  deleteProductTypeController
);

export { productTypesRouter };
