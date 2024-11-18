import { Request, Response } from 'express';

import { getProductGroup } from '../../models/product-groups';
import { success } from '../../utils/success';
import { resourceNotFound } from '../../utils/resource-not-found';
import { internalError } from '../../utils/internal-error';

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
      resourceNotFound(res, 'Product Group Not Found');
    }
  } catch (err) {
    internalError(res);
  }
};
