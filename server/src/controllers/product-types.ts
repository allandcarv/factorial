import { Request, Response } from 'express';

import { getProductTypes } from '../models/product-types';
import { getProductGroups } from '../models/product-groups';
import type { ProductType } from '../types/product-type';
import type { ProductGroupDTO } from '../types/product-group';

export const productTypesController = async (_req: Request, res: Response) => {
  try {
    const productTypes = await getProductTypes();
    const productGroups = await getProductGroups();

    const mappedProductGroups = new Map<string, ProductGroupDTO>();

    productGroups.forEach((productGroup) =>
      mappedProductGroups.set(productGroup.id, productGroup)
    );

    const result: ProductType[] = productTypes.map((productType) => {
      const productGroup = mappedProductGroups.get(productType.product_group);

      return {
        id: productType.id,
        description: productType.description,
        productGroup: {
          id: productGroup?.id,
          title: productGroup?.title,
        },
        title: productType.title,
      };
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Internal Error' });
  }
};
