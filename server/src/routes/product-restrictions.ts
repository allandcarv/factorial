import { Router } from 'express';

import { getProductRestrictionsController } from '../controllers/product-restrictions/get-product-restrictions';
import { validateNewProductRestriction } from '../validators/product-restriction';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import { addProductRestrictionController } from '../controllers/product-restrictions/add-product-restriction';
import { getProductRestrictionsBySourceProductController } from '../controllers/product-restrictions/get-product-restrictions-by-source-product';
import { getProductRestrictionsByRestrictedTypeController } from '../controllers/product-restrictions/get-product-restrictions-by-restricted-type';
import { getProductRestrictionsByRestrictedProductController } from '../controllers/product-restrictions/get-product-restrictions-by-restricted-product';
import { getProductRestrictionsByGroupController } from '../controllers/product-restrictions/get-product-restrictions-by-group';

const productRestrictionsRouter = Router();

productRestrictionsRouter.get(
  '/product-restrictions/product-group/:id',
  getProductRestrictionsByGroupController
);
productRestrictionsRouter.get(
  '/product-restrictions/restricted-product/:id',
  getProductRestrictionsByRestrictedProductController
);
productRestrictionsRouter.get(
  '/product-restrictions/restricted-type/:id',
  getProductRestrictionsByRestrictedTypeController
);
productRestrictionsRouter.get(
  '/product-restrictions/source-product/:id',
  getProductRestrictionsBySourceProductController
);
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
