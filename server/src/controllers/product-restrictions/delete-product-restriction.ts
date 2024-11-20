import { Request, Response } from 'express';
import { internalError } from '../../utils/internal-error';
import {
  getProductRestriction,
  deleteProductRestriction,
} from '../../models/product-restrictions';
import { notFound } from '../../utils/not-found';
import { noContent } from '../../utils/no-content';

export const deleteProductRestrictionController = async (
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

    await deleteProductRestriction(productRestrictionId);

    noContent(res);
  } catch {
    internalError(res);
  }
};
