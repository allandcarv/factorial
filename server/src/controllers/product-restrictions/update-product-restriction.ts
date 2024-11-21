import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { updateProductRestriction } from '../../models/product-restrictions';
import type { UpdateProductRestriction } from '../../types/product-restriction';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success } from '../../utils/success';

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
