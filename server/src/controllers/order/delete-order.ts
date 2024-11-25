import type { Request, Response } from 'express';

import { internalError, noContent } from '../../shared/utils';
import { deleteOrder } from '../../models/order';

export const deleteOrderController = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;

    await deleteOrder(orderId);

    noContent(res);
  } catch (err) {
    internalError(res);
  }
};
