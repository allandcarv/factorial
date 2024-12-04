import { Router } from 'express';

import {
  addProductGroupController,
  deleteProductGroupController,
  getProductGroupController,
  getProductGroupsController,
  getProductsByGroupController,
  getProductTypesByGroupController,
  updateProductGroupController,
} from '../controllers/product-group';
import {
  validateNewProductGroup,
  validateUpdateProductGroup,
} from '../validators/product-group';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import { productGroupIdValidator } from '../middlewares/product-group';

const productGroupsRouter = Router();

productGroupsRouter.get(
  '/product-groups/:id/products',
  productGroupIdValidator,
  getProductsByGroupController
);
productGroupsRouter.get(
  '/product-groups/:id/types',
  productGroupIdValidator,
  getProductTypesByGroupController
);
productGroupsRouter.get(
  '/product-groups/:id',
  productGroupIdValidator,
  getProductGroupController
);
productGroupsRouter.get('/product-groups', getProductGroupsController);

productGroupsRouter.post(
  '/product-groups',
  validateNewProductGroup,
  fieldsErrorValidation,
  addProductGroupController
);

productGroupsRouter.patch(
  '/product-groups/:id',
  validateUpdateProductGroup,
  fieldsErrorValidation,
  productGroupIdValidator,
  updateProductGroupController
);

productGroupsRouter.delete(
  '/product-groups/:id',
  productGroupIdValidator,
  deleteProductGroupController
);

export { productGroupsRouter };
