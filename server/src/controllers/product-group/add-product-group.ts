import type { Request, Response } from 'express';

import type { NewProductGroup } from '../../types/product-group';
import { addProductGroup } from '../../models/product-group';
import { created } from '../../utils/created';
import { internalError } from '../../utils/internal-error';

export const addProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const newProductGroup: NewProductGroup = {
      description: req.body.description,
      title: req.body.title,
    };

    const result = await addProductGroup(newProductGroup);

    created(res, result);
  } catch (err) {
    internalError(res);
  }
};
