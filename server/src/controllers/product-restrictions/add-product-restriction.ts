import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import type { NewProductRestriction } from '../../types/product-restriction';
import { addProductRestriction } from '../../models/product-restrictions';
import { created } from '../../utils/created';
import { productRestrictionAdapter } from '../../adapters/product-restriction';

export const addProductRestrictionController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      sourceProduct: sourceProductId,
      restrictedProduct: restrictedProductId,
      productGroup: productGroupId,
      restrictedType: restrictedTypeId,
    } = req.body;

    const productRestriction: NewProductRestriction = {
      sourceProduct: sourceProductId,
      productGroup: productGroupId,
      restrictedProduct: restrictedProductId,
      restrictedType: restrictedTypeId,
    };

    const result = await addProductRestriction(productRestriction);

    const newProductRestriction = productRestrictionAdapter(result);

    created(res, newProductRestriction);
  } catch (err) {
    internalError(res);
  }
};
