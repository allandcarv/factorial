import { Request, Response } from 'express';

import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productRestriction } = req;

    if (!productRestriction) {
      throw new Error('Product Restriction Not Found');
    }

    const result = productRestrictionAdapter(productRestriction);

    success(res, result);
  } catch (err) {
    console.error(err);

    internalError(res);
  }
};
