import { Router } from 'express';

import {
  addProductGroupController,
  getProductGroupController,
  getProductGroupsController,
  updateProductGroupController,
} from '../../controllers/product-group';
import {
  validateNewProductGroup,
  validateUpdateProductGroup,
} from '../../validators/product-group';
import { fieldsErrorValidation } from '../../middlewares/fields-error-validation';

const productGroupsRouter = Router();

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

export { productGroupsRouter };
