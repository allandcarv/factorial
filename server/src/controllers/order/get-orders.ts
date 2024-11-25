import type { Request, Response } from 'express';

import { getOrders } from '../../models/order';
import { internalError, success } from '../../shared/utils';

export const getOrdersController = async (_req: Request, res: Response) => {
  try {
    const orders = await getOrders();

    success(res, orders);
  } catch (err) {
    internalError(res);
  }
};
