import type { Request, Response } from 'express';

import { getProducts } from '../../models/product';
import { getProductType } from '../../models/product-type';
import { productAdapter } from '../../adapters/product';
import type { Product } from '../../shared/types/product';
import { success, internalError } from '../../shared/utils';

export const getProductsController = async (_req: Request, res: Response) => {
  try {
    const products = await getProducts();
    const result: Product[] = [];

    for (const product of products) {
      const productType = await getProductType(product.product_type);

      if (!productType) {
        throw new Error('Product Type Not Found');
      }

      result.push(productAdapter(product, productType));
    }

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
