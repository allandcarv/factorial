import type { Request, Response } from 'express';

import { deleteProductGroup } from '../../models/product-group';
import { noContent, internalError } from '../../shared/utils';

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
