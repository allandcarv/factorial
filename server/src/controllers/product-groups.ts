import { Request, Response } from 'express';

import { getProductGroups } from '../models/product-groups';
import { internalErrorHandler } from '../utils/internal-error';

export const productGroupsController = async (_req: Request, res: Response) => {
  try {
    const productGroups = await getProductGroups();

    res.status(200).json(productGroups);
  } catch (err) {
    internalErrorHandler(res);
  }
};
