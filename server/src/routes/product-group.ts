import { Router } from 'express';

import {
  addProductGroupController,
  getProductGroupController,
  getProductGroupsController,
  updateProductGroupController,
} from '../controllers/product-group';
import {
  validateNewProductGroup,
  validateUpdateProductGroup,
} from '../validators/product-group';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import { deleteProductGroupController } from '../controllers/product-group/delete-product-group';
import { getProductTypesByGroupController } from '../controllers/product-group/get-product-types-by-group';

const productGroupsRouter = Router();

productGroupsRouter.get(
  '/product-groups/:id/types',
  getProductTypesByGroupController
);
productGroupsRouter.get('/product-groups/:id', getProductGroupController);
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
  updateProductGroupController
);

productGroupsRouter.delete('/product-groups/:id', deleteProductGroupController);

export { productGroupsRouter };
