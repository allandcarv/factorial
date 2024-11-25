import type { Request, Response } from 'express';

import { getProductGroups } from '../../models/product-group';
import { success, internalError } from '../../shared/utils';

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
