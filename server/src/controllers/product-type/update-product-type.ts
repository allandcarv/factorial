import type { Request, Response } from 'express';

import { updateProductType } from '../../models/product-type';
import { getProductGroup } from '../../models/product-group';
import type { UpdateProductType } from '../../shared/types/product-type';
import { productTypeAdapter } from '../../adapters/product-type';
import { success, internalError } from '../../shared/utils';

export const updateProductTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const newProductType: UpdateProductType = {
      id: req.params.id,
      title: req.body.title,
      product_group: req.body.productGroup,
      description: req.body.description,
    };

    const productType = await updateProductType(newProductType);

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
