import type { NextFunction, Request, Response } from 'express';

import { getProduct } from '../../models/product';
import { notFound, internalError } from '../../shared/utils';

export const productIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;

    const product = await getProduct(productId);

    if (!product) {
      notFound(res, 'Product Not Found');
    } else {
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
