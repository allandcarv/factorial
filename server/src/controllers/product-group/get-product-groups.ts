import { Request, Response } from 'express';

import { getProductGroups } from '../../models/product-groups';
import { internalError } from '../../utils/internal-error';
import { success } from '../../utils/success';

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
