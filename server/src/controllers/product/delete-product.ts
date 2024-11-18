import { Request, Response } from 'express';

import { getProduct, deleteProduct } from '../../models/product';
import { notFound } from '../../utils/not-found';
import { noContent } from '../../utils/no-content';
import { internalError } from '../../utils/internal-error';

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const product = await getProduct(productId);

    if (!product) {
      notFound(res, 'Product Not Found');

      return;
    }

    await deleteProduct(productId);

    noContent(res);
  } catch (err) {
    internalError(res);
  }
};
