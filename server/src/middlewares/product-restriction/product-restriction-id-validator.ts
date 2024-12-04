import type { NextFunction, Request, Response } from 'express';

import { getProductRestriction } from '../../models/product-restrictions';
import { notFound, internalError } from '../../shared/utils';

export const productRestrictionIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productRestriction = await getProductRestriction(req.params.id);

    if (!productRestriction) {
      notFound(res, 'Product Restriction Not Found');
    } else {
      req.productRestriction = productRestriction;
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
