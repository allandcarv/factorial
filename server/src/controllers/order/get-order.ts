import type { Request, Response } from 'express';

import { success } from '../../shared/utils/success';
import { internalError } from '../../shared/utils/internal-error';
import { notFound } from '../../shared/utils/not-found';
import { getOrder } from '../../models/order';
import { getUser } from '../../models/user';
import { orderAdapter } from '../../adapters/order';

export const getOrderController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const order = await getOrder(id);

    if (!order) {
      notFound(res, 'Order not found');

      return;
    }

    const orderUser = await getUser(order.user);

    if (!orderUser) {
      throw new Error('The user of the order Not Found');
    }

    const result = orderAdapter(order, orderUser);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
