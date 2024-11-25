import type { Request, Response } from 'express';

import { getProducts } from '../../models/product';
import { getProductType } from '../../models/product-type';
import { success } from '../../shared/utils/success';
import { internalError } from '../../shared/utils/internal-error';
import { productAdapter } from '../../adapters/product';
import type { Product } from '../../shared/types/product';

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
