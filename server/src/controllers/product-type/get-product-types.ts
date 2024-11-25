import type { Request, Response } from 'express';

import { getProductTypes } from '../../models/product-type';
import { getProductGroup } from '../../models/product-group';
import { productTypeAdapter } from '../../adapters/product-type';
import type { ProductType } from '../../shared/types/product-type';
import { success, internalError } from '../../shared/utils';

export const getProductTypesController = async (
  _req: Request,
  res: Response
) => {
  try {
    const productTypes = await getProductTypes();
    const result: ProductType[] = [];

    for (const productType of productTypes) {
      const productGroup = await getProductGroup(productType.product_group);

      if (!productGroup) {
        throw new Error('Product Group Not Found');
      }

      result.push(productTypeAdapter(productType, productGroup));
    }

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
