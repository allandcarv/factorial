import type { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import {
  getProductsByGroup,
  getTypesByGroup,
} from '../../models/product-group';
import type { ProductTypeDTO } from '../../types/product-type';
import type { Product } from '../../types/product';
import { success } from '../../utils/success';
import { productAdapter } from '../../adapters/product';

export const getProductsByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const productGroupId = req.params.id;

    const productTypes = await getTypesByGroup(productGroupId);
    const mappedProductTypes = new Map<string, ProductTypeDTO>();

    for (const productType of productTypes) {
      mappedProductTypes.set(productType.id, productType);
    }

    const products = await getProductsByGroup(productGroupId);
    const parsedProducts: Product[] = products.map((product) => {
      const productType = mappedProductTypes.get(product.product_type);

      if (!productType) {
        throw new Error('Product Type Not Found');
      }

      return productAdapter(product, productType);
    });

    success(res, parsedProducts);
  } catch (err) {
    internalError(res);
  }
};
