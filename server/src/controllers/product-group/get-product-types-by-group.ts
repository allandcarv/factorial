import type { Request, Response } from 'express';

import { getProductGroup, getTypesByGroup } from '../../models/product-group';
import { notFound } from '../../utils/not-found';
import type { ProductType } from '../../types/product-type';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';
import { productTypeAdapter } from '../../adapters/product-type';

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
