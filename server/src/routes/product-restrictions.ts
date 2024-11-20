import { Router } from 'express';

import { validateNewProductRestriction } from '../validators/product-restriction';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import {
  addProductRestrictionController,
  deleteProductRestrictionController,
  getProductRestrictionController,
  getProductRestrictionsByGroupController,
  getProductRestrictionsByRestrictedProductController,
  getProductRestrictionsByRestrictedTypeController,
  getProductRestrictionsBySourceProductController,
  getProductRestrictionsController,
} from '../controllers/product-restrictions';

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
  '/product-restrictions/:id',
  getProductRestrictionController
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

productRestrictionsRouter.delete(
  '/product-restrictions/:id',
  deleteProductRestrictionController
);

export { productRestrictionsRouter };
