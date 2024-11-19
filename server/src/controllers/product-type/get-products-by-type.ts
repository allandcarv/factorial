import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProductsByType, getProductType } from '../../models/product-type';
import { notFound } from '../../utils/not-found';
import type { Product } from '../../types/product';
import { success } from '../../utils/success';

export const getProductsByTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const productTypeId = req.params.id;

    const productType = await getProductType(productTypeId);

    if (!productType) {
      notFound(res, 'Product Type Not Found');

      return;
    }

    const products = await getProductsByType(productTypeId);
    const parsedProducts: Product[] = products.map((product) => ({
      id: product.id,
      title: product.title,
      productType: {
        id: productType.id,
        title: productType.title,
      },
      description: product.description,
      stock: product.stock,
    }));

    success(res, parsedProducts);
  } catch (err) {
    internalError(res);
  }
};
