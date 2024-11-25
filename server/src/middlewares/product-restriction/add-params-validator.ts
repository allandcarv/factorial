import type { Request, Response, NextFunction } from 'express';

import { getProductGroup } from '../../models/product-group';
import { getProduct } from '../../models/product';
import { getProductType } from '../../models/product-type';
import { badRequest, internalError } from '../../shared/utils';

export const addParamsValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      productGroup: productGroupId,
      sourceProduct: sourceProductId,
      restrictedType: restrictedTypeId,
      restrictedProduct: restrictedProductId,
    } = req.body;

    if (sourceProductId && restrictedProductId) {
      if (sourceProductId === restrictedProductId) {
        badRequest(res, 'Source and Restricted Products must be different');

        return;
      }
    }

    const productGroup = await getProductGroup(productGroupId);

    if (!productGroup) {
      badRequest(res, 'Product Group Not Found');

      return;
    }

    const sourceProduct = await getProduct(sourceProductId);

    if (!sourceProduct) {
      badRequest(res, 'Source Product Not Found');

      return;
    }

    const productType = await getProductType(restrictedTypeId);

    if (!productType) {
      badRequest(res, 'Product Type Not Found');

      return;
    }

    const restrictedProduct = await getProduct(restrictedProductId);

    if (!restrictedProduct) {
      badRequest(res, 'Restricted Product Not Found');

      return;
    }

    next();
  } catch (err) {
    internalError(res);
  }
};
