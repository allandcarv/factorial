import { Router } from 'express';

import { getOrdersController } from '../controllers/order/get-orders';
import { getOrderController } from '../controllers/order/get-order';
import { validateNewOrder } from '../validators';
import { fieldsErrorValidation } from '../middlewares/fields-error-validation';
import { addOrderController } from '../controllers/order/add-order';
import { productsValidator } from '../middlewares/orders';

const ordersRouter = Router();

ordersRouter.get('/orders/:id', getOrderController);
ordersRouter.get('/orders', getOrdersController);

ordersRouter.post(
  '/orders',
  validateNewOrder,
  fieldsErrorValidation,
  productsValidator,
  addOrderController
);

export { ordersRouter };
