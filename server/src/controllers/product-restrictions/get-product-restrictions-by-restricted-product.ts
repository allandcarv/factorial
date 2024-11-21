import type { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success } from '../../utils/success';
import { getProductRestrictionsByRestrictedProduct } from '../../models/product-restrictions';

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
