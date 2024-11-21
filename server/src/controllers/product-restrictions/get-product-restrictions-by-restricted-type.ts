import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { notFound } from '../../utils/not-found';
import { productRestrictionAdapter } from '../../adapters/product-restriction';
import { success } from '../../utils/success';
import { getProductType } from '../../models/product-type';
import { getProductRestrictionsByRestrictedType } from '../../models/product-restrictions';

export const getProductRestrictionsByRestrictedTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const productTypeId = req.params.id;

    const productType = await getProductType(productTypeId);

    if (!productType) {
      notFound(res, 'Product Type Not Found');

      return;
    }

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
