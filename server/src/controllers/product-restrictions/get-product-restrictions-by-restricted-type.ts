import type { Request, Response } from 'express';

import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { getProductRestrictionsByRestrictedType } from '../../models/product-restrictions';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionsByRestrictedTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const productTypeId = req.params.id;

    const productRestrictions = await getProductRestrictionsByRestrictedType(
      productTypeId
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
