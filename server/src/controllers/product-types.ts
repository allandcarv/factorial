import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import {
  addProductType,
  getProductType,
  getProductTypes,
} from '../models/product-types';
import { getProductGroup, getProductGroups } from '../models/product-groups';
import type { NewProductType, ProductType } from '../types/product-type';
import type { ProductGroupDTO } from '../types/product-group';
import { internalErrorHandler } from '../utils/internal-error';
import { resourceNotFound } from '../utils/resource-not-found';
import { badRequest } from '../utils/bad-request';
import { created } from '../utils/created';
import { success } from '../utils/success';

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

    success(res, result);
  } catch (err) {
    internalErrorHandler(res);
  }
};

export const productTypeController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productType = await getProductType(id);

    if (!productType) {
      resourceNotFound(res, 'Product Type Not Found');
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

    success(res, result);
  } catch (err) {
    internalErrorHandler(res);
  }
};

export const addProductTypeController = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      badRequest(res, 'All fields are required');
      return;
    }

    const newProductType: NewProductType = {
      description: req.body.description,
      productGroup: req.body.productGroup,
      title: req.body.title,
    };

    const result = await addProductType(newProductType);

    if (typeof result === 'string') {
      badRequest(res, result);
    } else {
      created(res, result);
    }
  } catch (err) {
    internalErrorHandler(res);
  }
};
