import { Request, Response } from 'express';

import { getProductType, updateProductType } from '../../models/product-type';
import { notFound } from '../../utils/not-found';
import type { ProductGroupDTO } from '../../types/product-group';
import { getProductGroup } from '../../models/product-group';
import { badRequest } from '../../utils/bad-request';
import type { ProductType, UpdateProductType } from '../../types/product-type';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';

export const updateProductTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const productTypeId = req.params.id;

    const productType = await getProductType(productTypeId);

    if (!productType) {
      notFound(res, 'Product Type not Found');
      return;
    }

    let productGroup: ProductGroupDTO | undefined;
    if (req.body.productGroup) {
      productGroup = await getProductGroup(req.body.productGroup);

      if (!productGroup) {
        badRequest(res, 'Product Group Not Found');
        return;
      }
    }

    const newProductType: UpdateProductType = {
      id: req.params.id,
      title: req.body.title,
      product_group: req.body.productGroup,
      description: req.body.description,
    };

    const updatedProductType = await updateProductType(newProductType);

    productGroup = await getProductGroup(updatedProductType.product_group);

    const result: ProductType = {
      id: updatedProductType.id,
      title: updatedProductType.title,
      productGroup: {
        id: productGroup?.id,
        title: productGroup?.title,
      },
      description: updatedProductType.description,
    };

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
