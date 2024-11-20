import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { notFound } from '../../utils/not-found';
import { productRestrictionAdapter } from '../../adapters/product-restrictions/product-restriction';
import { success } from '../../utils/success';
import { getProductGroup } from '../../models/product-group';
import { getProductRestrictionsByGroup } from '../../models/product-restrictions';

export const getProductRestrictionsByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const groupId = req.params.id;

    const productGroup = await getProductGroup(groupId);

    if (!productGroup) {
      notFound(res, 'Product Group Not Found');

      return;
    }

    const productRestrictions = await getProductRestrictionsByGroup(groupId);

    const result = productRestrictions.map((productRestriction) =>
      productRestrictionAdapter(productRestriction)
    );

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
