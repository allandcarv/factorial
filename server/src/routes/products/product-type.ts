import { Router } from 'express';
import {
  getProductTypeController,
  getProductTypesController,
  addProductTypeController,
  updateProductTypeController,
} from '../../controllers/product-type';
import { fieldsErrorValidation } from '../../middlewares/fields-error-validation';
import {
  validateNewProductType,
  validateUpdateProductType,
} from '../../validators/product-type';

const productTypesRouter = Router();

productTypesRouter.get('/types/:id', getProductTypeController);
productTypesRouter.get('/types', getProductTypesController);
productTypesRouter.post(
  '/types',
  validateNewProductType,
  fieldsErrorValidation,
  addProductTypeController
);
productTypesRouter.patch(
  '/types/:id',
  validateUpdateProductType,
  fieldsErrorValidation,
  updateProductTypeController
);

export { productTypesRouter };
