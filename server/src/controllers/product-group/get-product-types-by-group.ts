import type { Request, Response } from 'express';

import { getProductGroup, getTypesByGroup } from '../../models/product-group';
import type { ProductType } from '../../shared/types/product-type';
import { productTypeAdapter } from '../../adapters/product-type';
import { notFound, success, internalError } from '../../shared/utils';

export const getProductTypesByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const productGroupId = req.params.id;

    const productGroup = await getProductGroup(productGroupId);

    if (!productGroup) {
      notFound(res, 'Product Group Not Found');
      return;
    }

    const productTypesByGroup = await getTypesByGroup(productGroupId);

    const parsedProductTypesByGroup: ProductType[] = productTypesByGroup.map(
      (productType) => productTypeAdapter(productType, productGroup)
    );

    success(res, parsedProductTypesByGroup);
  } catch (err) {
    internalError(res);
  }
};
