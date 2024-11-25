import type { Request, Response } from 'express';

import { getProductRestrictions } from '../../models/product-restrictions';
import type { ProductRestriction } from '../../shared/types/product-restriction';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success, internalError } from '../../shared/utils';

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
