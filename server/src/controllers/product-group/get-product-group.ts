import type { Request, Response } from 'express';

import { success, internalError } from '../../shared/utils';

export const getProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productGroup } = req;

    if (!productGroup) {
      throw new Error('Product Group Not Found');
    }

    success(res, productGroup);
  } catch (err) {
    console.error(err);
    internalError(res);
  }
};
