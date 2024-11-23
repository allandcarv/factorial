import type { Request, Response } from 'express';

import { internalError } from '../../shared/utils/internal-error';
import { deleteProductRestriction } from '../../models/product-restrictions';
import { noContent } from '../../shared/utils/no-content';

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
