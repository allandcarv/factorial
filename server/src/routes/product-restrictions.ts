import { Router } from 'express';

import { getProductRestrictionsController } from '../controllers/product-restrictions/get-product-restrictions';
import { validateNewProductRestriction } from '../validators/product-restriction';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import { addProductRestrictionController } from '../controllers/product-restrictions/add-product-restriction';

const productRestrictionsRouter = Router();

productRestrictionsRouter.get(
  '/product-restrictions',
  getProductRestrictionsController
);

productRestrictionsRouter.post(
  '/product-restrictions',
  validateNewProductRestriction,
  fieldsErrorValidation,
  addProductRestrictionController
);

export { productRestrictionsRouter };
