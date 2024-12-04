import type { Request, Response } from 'express';

import {
  getProductsByGroup,
  getTypesByGroup,
} from '../../models/product-group';
import type { ProductTypeDTO } from '../../shared/types/product-type';
import type { Product } from '../../shared/types/product';
import { productAdapter } from '../../adapters/product';
import { success, internalError } from '../../shared/utils';

export const getProductsByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productGroup } = req;

    if (!productGroup) {
      throw new Error('Product Group Not Found');
    }

    const productTypes = await getTypesByGroup(productGroup.id);
    const mappedProductTypes = new Map<string, ProductTypeDTO>();

    for (const productType of productTypes) {
      mappedProductTypes.set(productType.id, productType);
    }

    const products = await getProductsByGroup(productGroup.id);
    const parsedProducts: Product[] = products.map((product) => {
      const productType = mappedProductTypes.get(product.product_type);

      if (!productType) {
        throw new Error('Product Type Not Found');
      }

      return productAdapter(product, productType);
    });

    success(res, parsedProducts);
  } catch (err) {
    console.error(err);
    internalError(res);
  }
};
