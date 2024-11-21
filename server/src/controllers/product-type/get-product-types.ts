import { Request, Response } from 'express';

import { getProductTypes } from '../../models/product-type';
import { getProductGroups } from '../../models/product-group';
import type { ProductGroupDTO } from '../../types/product-group';
import type { ProductType } from '../../types/product-type';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';

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

    const result: ProductType[] = productTypes.map((productType) => {
      const productGroup = mappedProductGroups.get(productType.product_group);

      if (!productGroup) {
        throw new Error('Product Group Not Found');
      }

      return {
        id: productType.id,
        description: productType.description,
        productGroup: {
          id: productGroup.id,
          title: productGroup.title,
        },
        title: productType.title,
      };
    });

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
