import { Request, Response } from 'express';

import { getProductType, getProductTypes } from '../models/product-types';
import { getProductGroup, getProductGroups } from '../models/product-groups';
import type { ProductType } from '../types/product-type';
import type { ProductGroupDTO } from '../types/product-group';
import { internalErrorHandler } from '../utils/internal-error';

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
    internalErrorHandler(res);
  }
};

export const productTypeController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productType = await getProductType(id);

    if (!productType) {
      res.status(404).json({ message: 'Product Type Not Found' });
      return;
    }

    const productGroup = await getProductGroup(productType.product_group);

    const result: ProductType = {
      description: productType.description,
      id: productType.id,
      productGroup: {
        id: productGroup?.id,
        title: productGroup?.title,
      },
      title: productType.title,
    };

    res.status(200).json(result);
  } catch (err) {
    internalErrorHandler(res);
  }
};
