import type { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { deleteProductRestriction } from '../../models/product-restrictions';
import { noContent } from '../../utils/no-content';

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
