import { Request, Response } from 'express';
import {
  deleteProductGroup,
  getProductGroup,
} from '../../models/product-groups';
import { notFound } from '../../utils/not-found';
import { internalError } from '../../utils/internal-error';

export const deleteProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const productGroupId = req.params.id;

    const productGroup = await getProductGroup(productGroupId);

    if (!productGroup) {
      notFound(res, 'Product Group Not Found');
      return;
    }

    await deleteProductGroup(productGroupId);

    res.status(204).send();
  } catch (err) {
    internalError(res);
  }
};
