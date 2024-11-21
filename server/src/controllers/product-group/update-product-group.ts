import type { Request, Response } from 'express';

import { updateProductGroup } from '../../models/product-group';
import type { UpdateProductGroup } from '../../types/product-group';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';

export const updateProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const updatedProductGroup: UpdateProductGroup = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await updateProductGroup(updatedProductGroup);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
