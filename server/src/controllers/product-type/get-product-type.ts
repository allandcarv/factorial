import type { Request, Response } from 'express';

import { getProductGroup } from '../../models/product-group';
import { productTypeAdapter } from '../../adapters/product-type';
import { success, internalError } from '../../shared/utils';

export const getProductTypeController = async (req: Request, res: Response) => {
  try {
    const { productType } = req;

    if (!productType) {
      throw new Error('Product Type Not Found');
    }

    const productGroup = await getProductGroup(productType.product_group);

    if (!productGroup) {
      throw new Error('Product Group Not Found');
    }

    const result = productTypeAdapter(productType, productGroup);

    success(res, result);
  } catch (err) {
    console.error(err);
    internalError(res);
  }
};
