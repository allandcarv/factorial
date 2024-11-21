import { Request, Response } from 'express';

import { internalError } from '../../utils/internal-error';
import { getProductsByType, getProductType } from '../../models/product-type';
import { notFound } from '../../utils/not-found';
import { success } from '../../utils/success';
import { productAdapter } from '../../adapters/product';

export const getProductsByTypeController = async (
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

    const products = await getProductsByType(productTypeId);
    const parsedProducts = products.map((product) =>
      productAdapter(product, productType)
    );

    success(res, parsedProducts);
  } catch (err) {
    internalError(res);
  }
};
