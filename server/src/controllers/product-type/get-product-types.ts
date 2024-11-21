import type { Request, Response } from 'express';

import { getProductTypes } from '../../models/product-type';
import { getProductGroups } from '../../models/product-group';
import type { ProductGroupDTO } from '../../types/product-group';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';
import { productTypeAdapter } from '../../adapters/product-type';

export const getProductTypesController = async (
  _req: Request,
  res: Response
) => {
  try {
    const productTypes = await getProductTypes();
    const productGroups = await getProductGroups();

    const mappedProductGroups = new Map<string, ProductGroupDTO>();

    productGroups.forEach((productGroup) =>
      mappedProductGroups.set(productGroup.id, productGroup)
    );

    const result = productTypes.map((productType) => {
      const productGroup = mappedProductGroups.get(productType.product_group);

      if (!productGroup) {
        throw new Error('Product Group Not Found');
      }

      return productTypeAdapter(productType, productGroup);
    });

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
