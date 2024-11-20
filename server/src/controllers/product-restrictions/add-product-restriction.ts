import { Request, Response } from 'express';

import { badRequest } from '../../utils/bad-request';
import { getProduct } from '../../models/product';
import { notFound } from '../../utils/not-found';
import { internalError } from '../../utils/internal-error';
import type { NewProductRestriction } from '../../types/product-restriction';
import { addProductRestriction } from '../../models/product-restrictions';
import { created } from '../../utils/created';
import { getProductGroupByType } from '../../models/product-group/get-product-group-by-type';
import { productRestrictionAdapter } from '../../adapters/product-restrictions';

export const addProductRestrictionController = async (
  req: Request,
  res: Response
) => {
  try {
    const sourceProductId = req.body.sourceProduct;
    const restrictedProductId = req.body.restrictedProduct;

    if (sourceProductId === restrictedProductId) {
      badRequest(res, 'Source and Restricted Products must be different');

      return;
    }

    const sourceProduct = await getProduct(sourceProductId);
    if (!sourceProduct) {
      notFound(res, 'Source Product Not Found');

      return;
    }

    const restrictedProduct = await getProduct(restrictedProductId);
    if (!restrictedProduct) {
      notFound(res, 'Restricted Product Not Found');

      return;
    }

    const productGroup = await getProductGroupByType(
      restrictedProduct.product_type
    );

    const productRestriction: NewProductRestriction = {
      sourceProduct: sourceProductId,
      productGroup: productGroup.id,
      restrictedProduct: restrictedProductId,
      restrictedType: restrictedProduct.product_type,
    };

    const result = await addProductRestriction(productRestriction);

    const newProductRestriction = productRestrictionAdapter(result);

    created(res, newProductRestriction);
  } catch (err) {
    internalError(res);
  }
};
