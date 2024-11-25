import type { Request, Response, NextFunction } from 'express';
import { internalError, notFound } from '../../shared/utils';
import { getOrder } from '../../models/order';

export const orderIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderId = req.params.id;

    const order = await getOrder(orderId);

    if (!order) {
      notFound(res, 'Order Not Found');
    } else {
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
