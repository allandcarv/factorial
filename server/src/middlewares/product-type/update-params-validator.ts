import type { NextFunction, Request, Response } from 'express';

import { getProductGroup } from '../../models/product-group';
import { badRequest } from '../../shared/utils/bad-request';
import { internalError } from '../../shared/utils/internal-error';

export const updateParamsValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.productGroup) {
      const productGroup = await getProductGroup(req.body.productGroup);

      if (!productGroup) {
        badRequest(res, 'Product Group Not Found');

        return;
      }
    }

    next();
  } catch (err) {
    internalError(res);
  }
};
