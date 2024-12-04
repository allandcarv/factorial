import { Router } from 'express';

import {
  validateNewProductRestriction,
  validateUpdateProductRestriction,
} from '../validators/product-restriction';
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
import {
  addParamsValidator,
  productRestrictionIdValidator,
  updateParamsValidator,
} from '../middlewares/product-restriction';
import { updateProductRestrictionController } from '../controllers/product-restrictions/update-product-restriction';
import { productGroupIdValidator } from '../middlewares/product-group';
import { productIdValidator } from '../middlewares/product';
import { productTypeIdValidator } from '../middlewares/product-type';

const productRestrictionsRouter = Router();

productRestrictionsRouter.get(
  '/product-restrictions/product-group/:id',
  productGroupIdValidator,
  getProductRestrictionsByGroupController
);
productRestrictionsRouter.get(
  '/product-restrictions/restricted-product/:id',
  productIdValidator,
  getProductRestrictionsByRestrictedProductController
);
productRestrictionsRouter.get(
  '/product-restrictions/restricted-type/:id',
  productTypeIdValidator,
  getProductRestrictionsByRestrictedTypeController
);
productRestrictionsRouter.get(
  '/product-restrictions/source-product/:id',
  productIdValidator,
  getProductRestrictionsBySourceProductController
);
productRestrictionsRouter.get(
  '/product-restrictions/:id',
  productRestrictionIdValidator,
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
  addParamsValidator,
  addProductRestrictionController
);

productRestrictionsRouter.patch(
  '/product-restrictions/:id',
  validateUpdateProductRestriction,
  fieldsErrorValidation,
  updateParamsValidator,
  updateProductRestrictionController
);

productRestrictionsRouter.delete(
  '/product-restrictions/:id',
  productRestrictionIdValidator,
  deleteProductRestrictionController
);

export { productRestrictionsRouter };
