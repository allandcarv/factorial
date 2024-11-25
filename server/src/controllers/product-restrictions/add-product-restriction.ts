import { Request, Response } from 'express';

import type { NewProductRestriction } from '../../shared/types/product-restriction';
import { addProductRestriction } from '../../models/product-restrictions';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { created, internalError } from '../../shared/utils';

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
