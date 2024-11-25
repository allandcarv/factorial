import type { Request, Response } from 'express';

import { deleteProductRestriction } from '../../models/product-restrictions';
import { noContent, internalError } from '../../shared/utils';

export const deleteProductRestrictionController = async (
  req: Request,
  res: Response
) => {
  try {
    const productRestrictionId = req.params.id;

    await deleteProductRestriction(productRestrictionId);

    noContent(res);
  } catch {
    internalError(res);
  }
};
