import type { Request, Response } from 'express';

import { getOrder } from '../../models/order';
import { notFound, success, internalError } from '../../shared/utils';

export const getOrderController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const order = await getOrder(id);

    if (!order) {
      notFound(res, 'Order not found');

      return;
    }

    success(res, order);
  } catch (err) {
    internalError(res);
  }
};
