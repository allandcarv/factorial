import type { NextFunction, Request, Response } from 'express';

import { getProductGroup } from '../../models/product-group';
import { badRequest } from '../../utils/bad-request';
import { internalError } from '../../utils/internal-error';

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
