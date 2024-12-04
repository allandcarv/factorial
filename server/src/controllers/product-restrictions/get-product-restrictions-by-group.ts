import type { Request, Response } from 'express';

import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { getProductRestrictionsByGroup } from '../../models/product-restrictions';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionsByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productGroup } = req;

    if (!productGroup) {
      throw new Error('Product Group Not Found');
    }

    const productRestrictions = await getProductRestrictionsByGroup(
      productGroup.id
    );

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
