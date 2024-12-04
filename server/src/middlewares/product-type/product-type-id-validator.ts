import type { NextFunction, Request, Response } from 'express';

import { getProductType } from '../../models/product-type';
import { notFound, internalError } from '../../shared/utils';

export const productTypeIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productTypeId = req.params.id;

    const productType = await getProductType(productTypeId);

    if (!productType) {
      notFound(res, 'Product Type Not Found');
    } else {
      req.productType = productType;
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
