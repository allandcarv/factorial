import { Request, Response } from 'express';

import { getProductGroups } from '../models/product-groups';

export const productGroupsController = async (_req: Request, res: Response) => {
  try {
    const productGroups = await getProductGroups();

    res.status(200).json(productGroups);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
