import type { Request, Response } from 'express';

import { deleteProductType } from '../../models/product-type';
import { noContent } from '../../shared/utils/no-content';
import { internalError } from '../../shared/utils/internal-error';

export const deleteProductTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const productTypeId = req.params.id;

    await deleteProductType(productTypeId);

    noContent(res);
  } catch (err) {
    internalError(res);
  }
};
