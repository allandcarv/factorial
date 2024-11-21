import type { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProductRestrictionsBySourceProduct } from '../../models/product-restrictions';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success } from '../../utils/success';

export const getProductRestrictionsBySourceProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const sourceProductId = req.params.id;

    const productRestrictions = await getProductRestrictionsBySourceProduct(
      sourceProductId
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
