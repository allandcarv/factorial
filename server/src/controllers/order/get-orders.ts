import type { Request, Response } from 'express';

import { getOrders } from '../../models/order';
import { getUser } from '../../models/user';
import { internalError, success } from '../../shared/utils';
import type { Order } from '../../shared/types/order';
import { orderAdapter } from '../../adapters/order';

export const getOrdersController = async (_req: Request, res: Response) => {
  try {
    const orders = await getOrders();
    const result: Order[] = [];

    for (const order of orders) {
      const user = await getUser(order.user);

      if (!user) {
        throw new Error('The User of The Order Not Found');
      }

      result.push(orderAdapter(order, user));
    }

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
