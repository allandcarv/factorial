import { Router } from 'express';

import { getOrdersController } from '../controllers/order/get-orders';
import { getOrderController } from '../controllers/order/get-order';

const ordersRouter = Router();

ordersRouter.get('/orders/:id', getOrderController);
ordersRouter.get('/orders', getOrdersController);

export { ordersRouter };
