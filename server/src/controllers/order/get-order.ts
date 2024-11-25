import type { Request, Response } from 'express';

import { success } from '../../shared/utils/success';
import { internalError } from '../../shared/utils/internal-error';
import { notFound } from '../../shared/utils/not-found';
import { getOrder } from '../../models/order';

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
