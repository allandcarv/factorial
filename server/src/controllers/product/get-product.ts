import { Request, Response } from 'express';

import { getProduct } from '../../models/product';
import { resourceNotFound } from '../../utils/resource-not-found';
import { getProductType } from '../../models/product-types';
import type { Product } from '../../types/product';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';

export const getProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getProduct(id);

    if (!product) {
      resourceNotFound(res, 'Product not found');

      return;
    }

    const productType = await getProductType(product.product_type);

    const result: Product = {
      description: product.description,
      id: product.id,
      productType: {
        id: productType?.id,
        title: productType?.title,
      },
      stock: product.stock,
      title: product.title,
    };

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
