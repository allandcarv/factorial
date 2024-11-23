import { Request, Response } from 'express';

import { internalError } from '../../shared/utils/internal-error';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success } from '../../shared/utils/success';
import { getProductRestrictionsByGroup } from '../../models/product-restrictions';

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
