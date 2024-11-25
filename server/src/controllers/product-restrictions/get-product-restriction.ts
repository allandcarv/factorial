import { Request, Response } from 'express';

import { getProductRestriction } from '../../models/product-restrictions';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { notFound, success, internalError } from '../../shared/utils';

export const getProductRestrictionController = async (
  req: Request,
  res: Response
) => {
  try {
    const productRestrictionId = req.params.id;

    const productRestriction = await getProductRestriction(
      productRestrictionId
    );

    if (!productRestriction) {
      notFound(res, 'Product Restriction Not Found');

      return;
    }

    const result = productRestrictionAdapter(productRestriction);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
