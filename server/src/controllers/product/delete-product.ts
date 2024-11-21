import { Request, Response } from 'express';

import { deleteProduct } from '../../models/product';
import { noContent } from '../../utils/no-content';
import { internalError } from '../../utils/internal-error';

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    await deleteProduct(productId);

    noContent(res);
  } catch (err) {
    internalError(res);
  }
};
