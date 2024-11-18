import { Request, Response } from 'express';

import { getProductType } from '../../models/product-types';
import { resourceNotFound } from '../../utils/resource-not-found';
import { getProductGroup } from '../../models/product-group';
import type { ProductType } from '../../types/product-type';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';

export const getProductTypeController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productType = await getProductType(id);

    if (!productType) {
      resourceNotFound(res, 'Product Type Not Found');
      return;
    }

    const productGroup = await getProductGroup(productType.product_group);

    const result: ProductType = {
      description: productType.description,
      id: productType.id,
      productGroup: {
        id: productGroup?.id,
        title: productGroup?.title,
      },
      title: productType.title,
    };

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
