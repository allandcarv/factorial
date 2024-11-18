import { Request, Response } from 'express';

import { getProductGroup } from '../../models/product-groups';
import { badRequest } from '../../utils/bad-request';
import type { NewProductType, ProductType } from '../../types/product-type';
import { addProductType } from '../../models/product-types';
import { created } from '../../utils/created';
import { internalError } from '../../utils/internal-error';

export const addProductTypeController = async (req: Request, res: Response) => {
  try {
    const productGroup = await getProductGroup(req.body.productGroup);

    if (!productGroup) {
      badRequest(res, 'Product Group Not Found');
      return;
    }

    const newProductType: NewProductType = {
      description: req.body.description,
      productGroup: req.body.productGroup,
      title: req.body.title,
    };

    const result = await addProductType(newProductType);

    const productType: ProductType = {
      id: result.id,
      title: result.title,
      productGroup: {
        id: productGroup.id,
        title: productGroup.title,
      },
      description: result.description,
    };

    created(res, productType);
  } catch (err) {
    internalError(res);
  }
};
