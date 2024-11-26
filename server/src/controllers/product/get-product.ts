import type { Request, Response } from 'express';

import { getProduct } from '../../models/product';
import { getProductType } from '../../models/product-type';
import { productAdapter } from '../../adapters/product';
import { notFound, success, internalError } from '../../shared/utils';

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
