import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProductRestrictions } from '../../models/product-restrictions/get-product-restrictions';
import type { ProductRestriction } from '../../types/product-restriction';
import { success } from '../../utils/success';

export const getProductRestrictionsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const productRestrictions = await getProductRestrictions();

    const parsedProductRestrictions: ProductRestriction[] =
      productRestrictions.map((productRestriction) => ({
        id: productRestriction.id,
        sourceProduct: productRestriction.source_product,
        restrictedType: productRestriction.restricted_type,
        restrictedProduct: productRestriction.restricted_product,
      }));

    success(res, parsedProductRestrictions);
  } catch (err) {
    internalError(res);
  }
};
