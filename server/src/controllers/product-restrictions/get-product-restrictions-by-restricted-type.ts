import type { Request, Response } from 'express';

import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { getProductRestrictionsByRestrictedType } from '../../models/product-restrictions';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionsByRestrictedTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productType } = req;

    if (!productType) {
      throw new Error('Product Type Not Found');
    }

    const productRestrictions = await getProductRestrictionsByRestrictedType(
      productType.id
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    console.error(err);

    internalError(res);
  }
};
