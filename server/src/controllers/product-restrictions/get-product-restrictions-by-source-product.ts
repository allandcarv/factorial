import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProduct } from '../../models/product';
import { notFound } from '../../utils/not-found';
import { getProductRestrictionsBySourceProduct } from '../../models/product-restrictions/get-product-restrictions-by-source-product';
import { productRestrictionAdapter } from '../../adapters/product-restrictions/product-restriction';
import { success } from '../../utils/success';

export const getProductRestrictionsBySourceProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const sourceProductId = req.params.id;

    const sourceProduct = await getProduct(sourceProductId);

    if (!sourceProduct) {
      notFound(res, 'Source Product Not Found');

      return;
    }

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
