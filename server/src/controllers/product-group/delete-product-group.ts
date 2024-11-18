import { Request, Response } from 'express';

import {
  deleteProductGroup,
  getProductGroup,
} from '../../models/product-group';
import { notFound } from '../../utils/not-found';
import { internalError } from '../../utils/internal-error';
import { noContent } from '../../utils/no-content';

export const deleteProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const productGroupId = req.params.id;

    const productGroup = await getProductGroup(productGroupId);

    if (!productGroup) {
      notFound(res, 'Product Group Not Found');
      return;
    }

    await deleteProductGroup(productGroupId);

    noContent(res);
  } catch (err) {
    internalError(res);
  }
};
