import type { Request, Response } from 'express';

import { getProductGroup } from '../../models/product-group';
import type { NewProductType } from '../../shared/types/product-type';
import { addProductType } from '../../models/product-type';
import { created } from '../../shared/utils/created';
import { internalError } from '../../shared/utils/internal-error';
import {
  productTypeAdapter,
  productTypeDTOAdapter,
} from '../../adapters/product-type';
import { badRequest } from '../../shared/utils/bad-request';

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

    const productTypeDTO = productTypeDTOAdapter(newProductType);

    const result = await addProductType(productTypeDTO);

    const productType = productTypeAdapter(result, productGroup);

    created(res, productType);
  } catch (err) {
    internalError(res);
  }
};
