import type { Request, Response } from 'express';

import { badRequest } from '../../shared/utils/bad-request';
import { created } from '../../shared/utils/created';
import { internalError } from '../../shared/utils/internal-error';
import { getUser } from '../../models/user';
import { orderAdapter, orderDTOAdapter } from '../../adapters/order';
import { addOrder } from '../../models/order';

export const addOrderController = async (req: Request, res: Response) => {
  try {
    const orderUser = await getUser(req.body.user);

    if (!orderUser) {
      badRequest(res, 'Order User Not Found');
      return;
    }

    const newOrder = orderDTOAdapter({
      products: req.body.products,
      user: req.body.user,
    });

    const result = await addOrder(newOrder);

    const order = orderAdapter(result, orderUser);

    created(res, order);
  } catch (err) {
    internalError(res);
  }
};
