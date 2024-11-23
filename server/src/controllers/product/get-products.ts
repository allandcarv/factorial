import type { Request, Response } from 'express';

import { getProducts } from '../../models/product';
import { getProductTypes } from '../../models/product-type';
import type { ProductTypeDTO } from '../../shared/types/product-type';
import { success } from '../../shared/utils/success';
import { internalError } from '../../shared/utils/internal-error';
import { productAdapter } from '../../adapters/product';

export const getProductsController = async (_req: Request, res: Response) => {
  try {
    const products = await getProducts();
    const productTypes = await getProductTypes();

    const mappedProductTypes = new Map<string, ProductTypeDTO>();

    productTypes.forEach((productType) =>
      mappedProductTypes.set(productType.id, productType)
    );

    const result = products.map((product) => {
      const productType = mappedProductTypes.get(product.product_type);

      if (!productType) {
        throw new Error('Product Type Not Found');
      }

      return productAdapter(product, productType);
    });

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
