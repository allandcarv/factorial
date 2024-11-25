import type { Request, Response } from 'express';

import type { NewProductGroup } from '../../shared/types/product-group';
import { addProductGroup } from '../../models/product-group';
import { productGroupDTOAdapter } from '../../adapters/product-group';
import { created, internalError } from '../../shared/utils';

export const addProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const newProductGroup: NewProductGroup = {
      description: req.body.description,
      title: req.body.title,
    };

    const productGroup = productGroupDTOAdapter(newProductGroup);

    const result = await addProductGroup(productGroup);

    created(res, result);
  } catch (err) {
    internalError(res);
  }
};
