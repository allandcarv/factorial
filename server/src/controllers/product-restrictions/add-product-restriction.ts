import { Request, Response } from 'express';

import { badRequest } from '../../utils/bad-request';
import { getProduct } from '../../models/product';
import { notFound } from '../../utils/not-found';
import { internalError } from '../../utils/internal-error';
import type {
  NewProductRestriction,
  ProductRestriction,
} from '../../types/product-restriction';
import { addProductRestriction } from '../../models/product-restrictions/add-product-restriction';
import { created } from '../../utils/created';

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

    const productRestriction: NewProductRestriction = {
      sourceProduct: sourceProductId,
      restrictedType: restrictedProduct.product_type,
      restrictedProduct: restrictedProductId,
    };

    const result = await addProductRestriction(productRestriction);

    const newProductRestriction: ProductRestriction = {
      id: result.id,
      sourceProduct: result.source_product,
      restrictedType: result.restricted_type,
      restrictedProduct: result.restricted_product,
    };

    created(res, newProductRestriction);
  } catch (err) {
    internalError(res);
  }
};
