import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { notFound } from '../../utils/not-found';
import { productRestrictionAdapter } from '../../adapters/product-restrictions/product-restriction';
import { success } from '../../utils/success';
import { getProduct } from '../../models/product';
import { getProductRestrictionsByRestrictedProduct } from '../../models/product-restrictions/get-product-restrictions-by-restricted-product';

export const getProductRestrictionsByRestrictedProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const productId = req.params.id;

    const product = await getProduct(productId);

    if (!product) {
      notFound(res, 'Product Not Found');

      return;
    }

    const productRestrictions = await getProductRestrictionsByRestrictedProduct(
      productId
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
