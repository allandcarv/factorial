import type { Request, Response } from 'express';

import { getProductsByType } from '../../models/product-type';
import { productAdapter } from '../../adapters/product';
import { success, internalError } from '../../shared/utils';

export const getProductsByTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productType } = req;

    if (!productType) {
      throw new Error('Product Type Not Found');
    }

    const products = await getProductsByType(productType.id);
    const parsedProducts = products.map((product) =>
      productAdapter(product, productType)
    );

    success(res, parsedProducts);
  } catch (err) {
    console.error(err);
    internalError(res);
  }
};
