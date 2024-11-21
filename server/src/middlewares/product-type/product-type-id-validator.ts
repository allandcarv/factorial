import type { NextFunction, Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProductType } from '../../models/product-type';
import { notFound } from '../../utils/not-found';

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
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
