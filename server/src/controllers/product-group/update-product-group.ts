import { Request, Response } from 'express';

import {
  getProductGroup,
  updateProductGroup,
} from '../../models/product-groups';
import { notFound } from '../../utils/not-found';
import type { UpdateProductGroup } from '../../types/product-group';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';

export const updateProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const productGroup = await getProductGroup(req.params.id);

    if (!productGroup) {
      notFound(res, 'Product Group Not Found');
      return;
    }

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
