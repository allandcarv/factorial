import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProductRestrictions } from '../../models/product-restrictions';
import type { ProductRestriction } from '../../types/product-restriction';
import { success } from '../../utils/success';
import { productRestrictionAdapter } from '../../adapters/product-restrictions/product-restriction';

export const getProductRestrictionsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const productRestrictions = await getProductRestrictions();

    const parsedProductRestrictions: ProductRestriction[] =
      productRestrictions.map((productRestriction) =>
        productRestrictionAdapter(productRestriction)
      );

    success(res, parsedProductRestrictions);
  } catch (err) {
    internalError(res);
  }
};
