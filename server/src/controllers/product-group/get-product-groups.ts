import type { Request, Response } from 'express';

import { getProductGroups } from '../../models/product-group';
import { internalError } from '../../shared/utils/internal-error';
import { success } from '../../shared/utils/success';

export const getProductGroupsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const productGroups = await getProductGroups();

    success(res, productGroups);
  } catch (err) {
    internalError(res);
  }
};
