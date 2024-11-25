import type { Request, Response } from 'express';

import { updateProductRestriction } from '../../models/product-restrictions';
import type { UpdateProductRestriction } from '../../shared/types/product-restriction';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { internalError, success } from '../../shared/utils';

export const updateProductRestrictionController = async (
  req: Request,
  res: Response
) => {
  try {
    const updatedProductRestriction: UpdateProductRestriction = {
      id: req.params.id,
      product_group: req.body.productGroup,
      restricted_product: req.body.restrictedProduct,
      restricted_type: req.body.restrictedType,
      source_product: req.body.sourceProduct,
    };

    const productRestriction = await updateProductRestriction(
      updatedProductRestriction
    );

    const result = productRestrictionAdapter(productRestriction);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
