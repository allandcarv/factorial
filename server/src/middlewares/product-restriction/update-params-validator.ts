import type { Request, Response, NextFunction } from 'express';

import { getProductRestriction } from '../../models/product-restrictions';
import { getProductGroup } from '../../models/product-group';
import { getProduct } from '../../models/product';
import { getProductType } from '../../models/product-type';
import { notFound, badRequest, internalError } from '../../shared/utils';

export const updateParamsValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productRestrictionId = req.params.id;

    const productRestriction = await getProductRestriction(
      productRestrictionId
    );

    if (!productRestriction) {
      notFound(res, 'Product Restriction Not Found');

      return;
    }

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

    if (productGroupId) {
      const productGroup = await getProductGroup(productGroupId);

      if (!productGroup) {
        badRequest(res, 'Product Group Not Found');

        return;
      }
    }

    if (sourceProductId) {
      const sourceProduct = await getProduct(sourceProductId);

      if (!sourceProduct) {
        badRequest(res, 'Source Product Not Found');

        return;
      }
    }

    if (restrictedTypeId) {
      const productType = await getProductType(restrictedTypeId);

      if (!productType) {
        badRequest(res, 'Product Type Not Found');

        return;
      }
    }

    if (restrictedProductId) {
      const restrictedProduct = await getProduct(restrictedProductId);

      if (!restrictedProduct) {
        badRequest(res, 'Restricted Product Not Found');

        return;
      }
    }

    next();
  } catch (err) {
    internalError(res);
  }
};
