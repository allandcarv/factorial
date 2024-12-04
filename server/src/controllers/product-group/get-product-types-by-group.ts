import type { Request, Response } from 'express';

import { getTypesByGroup } from '../../models/product-group';
import type { ProductType } from '../../shared/types/product-type';
import { productTypeAdapter } from '../../adapters/product-type';
import { success, internalError } from '../../shared/utils';

export const getProductTypesByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productGroup } = req;

    if (!productGroup) {
      throw new Error('Product Group Not Found');
    }

    const productTypesByGroup = await getTypesByGroup(productGroup.id);

    const parsedProductTypesByGroup: ProductType[] = productTypesByGroup.map(
      (productType) => productTypeAdapter(productType, productGroup)
    );

    success(res, parsedProductTypesByGroup);
  } catch (err) {
    console.error(err);

    internalError(res);
  }
};
