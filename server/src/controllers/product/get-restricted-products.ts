import type { Request, Response } from 'express';

import { getRestrictedProducts } from '../../models/product';
import { success, internalError } from '../../shared/utils';

export const getRestrictedProductsController = async (
  req: Request,
  res: Response
) => {
  try {
    const productId = req.product?.id;

    if (!productId) {
      throw new Error('Product Not Found');
    }

    const restrictedProducts = await getRestrictedProducts(productId);

    success(res, restrictedProducts);
  } catch (err) {
    internalError(res);
  }
};
