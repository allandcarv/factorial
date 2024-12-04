import type { Request, Response } from 'express';

import { getProductType } from '../../models/product-type';
import { productAdapter } from '../../adapters/product';
import { success, internalError } from '../../shared/utils';

export const getProductController = async (req: Request, res: Response) => {
  try {
    const { product } = req;

    if (!product) {
      throw new Error('Product Not Found');
    }

    const productType = await getProductType(product.product_type);

    if (!productType) {
      throw new Error('Product Type Not Found');
    }

    const result = productAdapter(product, productType);

    success(res, result);
  } catch (err) {
    console.error(err);
    internalError(res);
  }
};
