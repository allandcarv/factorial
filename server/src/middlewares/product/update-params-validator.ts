import type { NextFunction, Request, Response } from 'express';

import { getProductGroup } from '../../models/product-group';
import { badRequest, internalError } from '../../shared/utils';

export const updateParamsValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.productType) {
      const productType = await getProductGroup(req.body.productType);

      if (!productType) {
        badRequest(res, 'Product Type Not Found');

        return;
      }
    }

    next();
  } catch (err) {
    internalError(res);
  }
};
