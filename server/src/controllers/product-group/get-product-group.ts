import type { Request, Response } from 'express';

import { getProductGroup } from '../../models/product-group';
import { success } from '../../shared/utils/success';
import { internalError } from '../../shared/utils/internal-error';
import { notFound } from '../../shared/utils/not-found';

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
