import { Request, Response } from 'express';

import { deleteProductType, getProductType } from '../../models/product-types';
import { notFound } from '../../utils/not-found';
import { noContent } from '../../utils/no-content';
import { internalError } from '../../utils/internal-error';

export const deleteProductTypeController = async (
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

    await deleteProductType(productTypeId);

    noContent(res);
  } catch (err) {
    internalError(res);
  }
};
