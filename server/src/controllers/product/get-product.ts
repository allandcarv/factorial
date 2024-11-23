import type { Request, Response } from 'express';

import { getProduct } from '../../models/product';
import { getProductType } from '../../models/product-type';
import { success } from '../../shared/utils/success';
import { internalError } from '../../shared/utils/internal-error';
import { notFound } from '../../shared/utils/not-found';
import { productAdapter } from '../../adapters/product';

export const getProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getProduct(id);

    if (!product) {
      notFound(res, 'Product not found');

      return;
    }

    const productType = await getProductType(product.product_type);

    if (!productType) {
      throw new Error('Product Type Not Found');
    }

    const result = productAdapter(product, productType);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
