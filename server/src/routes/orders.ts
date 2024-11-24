import { Router } from 'express';

import { getOrdersController } from '../controllers/order/get-orders';

const ordersRouter = Router();

ordersRouter.get('/orders', getOrdersController);

export { ordersRouter };
