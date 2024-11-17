import { Request, Response } from 'express';

import { getProductGroups } from '../models/product-groups';

export const productGroupsController = async (_req: Request, res: Response) => {
  const productGroups = await getProductGroups();

  res.status(200).json(productGroups);
};
