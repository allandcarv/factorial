import type { Request, Response } from 'express';

import { getProductType } from '../../models/product-type';
import { getProductGroup } from '../../models/product-group';
import { success } from '../../shared/utils/success';
import { internalError } from '../../shared/utils/internal-error';
import { notFound } from '../../shared/utils/not-found';
import { productTypeAdapter } from '../../adapters/product-type';

export const getProductTypeController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productType = await getProductType(id);

    if (!productType) {
      notFound(res, 'Product Type Not Found');

      return;
    }

    const productGroup = await getProductGroup(productType.product_group);

    if (!productGroup) {
      throw new Error('Product Group Not Found');
    }

    const result = productTypeAdapter(productType, productGroup);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
