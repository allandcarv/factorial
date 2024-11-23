import type { Request, Response } from 'express';

import { deleteProductGroup } from '../../models/product-group';
import { internalError } from '../../shared/utils/internal-error';
import { noContent } from '../../shared/utils/no-content';

export const deleteProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const productGroupId = req.params.id;

    await deleteProductGroup(productGroupId);

    noContent(res);
  } catch (err) {
    internalError(res);
  }
};
