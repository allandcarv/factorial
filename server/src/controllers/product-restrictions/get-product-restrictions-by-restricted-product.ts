import type { Request, Response } from 'express';

import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { getProductRestrictionsByRestrictedProduct } from '../../models/product-restrictions';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionsByRestrictedProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const productId = req.params.id;

    const productRestrictions = await getProductRestrictionsByRestrictedProduct(
      productId
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
