import type { Request, Response } from 'express';

import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { getProductRestrictionsByRestrictedProduct } from '../../models/product-restrictions';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionsByRestrictedProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { product } = req;

    if (!product) {
      throw new Error('Product Not Found');
    }

    const productRestrictions = await getProductRestrictionsByRestrictedProduct(
      product.id
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    console.error(err);
    internalError(res);
  }
};
