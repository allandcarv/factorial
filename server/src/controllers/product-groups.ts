import { Request, Response } from 'express';

import { getProductGroup, getProductGroups } from '../models/product-groups';
import { internalErrorHandler } from '../utils/internal-error';
import { resourceNotFound } from '../utils/resource-not-found';

export const productGroupsController = async (_req: Request, res: Response) => {
  try {
    const productGroups = await getProductGroups();

    res.status(200).json(productGroups);
  } catch (err) {
    internalErrorHandler(res);
  }
};

export const productGroupController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productGroup = await getProductGroup(id);

    if (productGroup) {
      res.status(200).json(productGroup);
    } else {
      resourceNotFound(res, 'Product Group Not Found');
    }
  } catch (err) {
    internalErrorHandler(res);
  }
};
