import { Router } from 'express';

import { validateNewOrder } from '../validators';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import { orderIdValidator } from '../middlewares/order';
import {
  getOrderController,
  getOrdersController,
  addOrderController,
  deleteOrderController,
} from '../controllers/order';

const ordersRouter = Router();

ordersRouter.get('/orders/:id', getOrderController);
ordersRouter.get('/orders', getOrdersController);

ordersRouter.post(
  '/orders',
  validateNewOrder,
  fieldsErrorValidation,
  addOrderController
);

ordersRouter.delete('/orders/:id', orderIdValidator, deleteOrderController);

export { ordersRouter };
