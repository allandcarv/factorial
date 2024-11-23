import type { Request, Response } from 'express';

import { internalError } from '../../shared/utils/internal-error';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success } from '../../shared/utils/success';
import { getProductRestrictionsByRestrictedType } from '../../models/product-restrictions';

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
