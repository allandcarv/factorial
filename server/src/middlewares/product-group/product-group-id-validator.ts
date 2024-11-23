import type { Request, Response, NextFunction } from 'express';

import { internalError } from '../../shared/utils/internal-error';
import { getProductGroup } from '../../models/product-group';
import { notFound } from '../../shared/utils/not-found';

export const productGroupIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productGroupId = req.params.id;

    const productGroup = await getProductGroup(productGroupId);

    if (!productGroup) {
      notFound(res, 'Product Group Not Found');
    } else {
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
