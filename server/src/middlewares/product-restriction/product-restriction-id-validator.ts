import type { NextFunction, Request, Response } from 'express';
import { internalError } from '../../utils/internal-error';
import { getProductRestriction } from '../../models/product-restrictions';
import { notFound } from '../../utils/not-found';

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
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
