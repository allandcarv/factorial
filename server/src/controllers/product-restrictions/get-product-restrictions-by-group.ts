import type { Request, Response } from 'express';

import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { getProductRestrictionsByGroup } from '../../models/product-restrictions';
import { success, internalError } from '../../shared/utils';

export const getProductRestrictionsByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const groupId = req.params.id;

    const productRestrictions = await getProductRestrictionsByGroup(groupId);

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
