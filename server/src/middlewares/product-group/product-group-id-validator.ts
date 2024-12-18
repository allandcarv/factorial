import type { Request, Response, NextFunction } from 'express';

import { getProductGroup } from '../../models/product-group';
import { notFound, internalError } from '../../shared/utils';

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
      req.productGroup = productGroup;
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
