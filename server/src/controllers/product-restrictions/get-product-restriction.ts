import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProductRestriction } from '../../models/product-restrictions';
import { success } from '../../utils/success';
import { notFound } from '../../utils/not-found';
import { productRestrictionAdapter } from '../../adapters/product-restrictions/product-restriction';

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
