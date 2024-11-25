import type { Request, Response } from 'express';

import { getProductGroup } from '../../models/product-group';
import { success, notFound, internalError } from '../../shared/utils';

export const getProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;

    const productGroup = await getProductGroup(id);

    if (productGroup) {
      success(res, productGroup);
    } else {
      notFound(res, 'Product Group Not Found');
    }
  } catch (err) {
    internalError(res);
  }
};
