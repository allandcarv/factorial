import { Request, Response } from 'express';
import { getProductGroup } from '../../models/product-group';
import { notFound } from '../../utils/not-found';
import { getTypesByGroup } from '../../models/product-group/get-types-by-group';
import type { ProductType } from '../../types/product-type';
import { success } from '../../utils/success';
import { internalError } from '../../utils/internal-error';

export const getProductTypesByGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const productGroupId = req.params.id;

    const productGroup = await getProductGroup(productGroupId);

    if (!productGroup) {
      notFound(res, 'Product Group Not Found');
      return;
    }

    const productTypesByGroup = await getTypesByGroup(productGroupId);

    const parsedProductTypesByGroup: ProductType[] = productTypesByGroup.map(
      (productType) => ({
        id: productType.id,
        title: productType.title,
        productGroup: {
          id: productGroup.id,
          title: productGroup.title,
        },
        description: productType.description,
      })
    );

    success(res, parsedProductTypesByGroup);
  } catch (err) {
    internalError(res);
  }
};
