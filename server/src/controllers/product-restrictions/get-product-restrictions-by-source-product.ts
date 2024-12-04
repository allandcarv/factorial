import type { Request, Response } from 'express';

import { getProductRestrictionsBySourceProduct } from '../../models/product-restrictions';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionsBySourceProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { product } = req;

    if (!product) {
      throw new Error('Product Not Found');
    }

    const productRestrictions = await getProductRestrictionsBySourceProduct(
      product.id
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
