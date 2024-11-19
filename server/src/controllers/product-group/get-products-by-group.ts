import { Request, Response } from 'express';
import { internalError } from '../../utils/internal-error';
import {
  getProductGroup,
  getProductsByGroup,
  getTypesByGroup,
} from '../../models/product-group';
import { notFound } from '../../utils/not-found';
import type { ProductTypeDTO } from '../../types/product-type';
import type { Product } from '../../types/product';
import { success } from '../../utils/success';

export const getProductsByGroupController = async (
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

    const productTypes = await getTypesByGroup(productGroupId);
    const mappedProductTypes = new Map<string, ProductTypeDTO>();

    for (const productType of productTypes) {
      mappedProductTypes.set(productType.id, productType);
    }

    const products = await getProductsByGroup(productGroupId);
    const parsedProducts: Product[] = products.map((product) => {
      const productType = mappedProductTypes.get(product.product_type);

      return {
        id: product.id,
        title: product.title,
        productType: {
          id: productType?.id,
          title: productType?.title,
        },
        description: product.description,
        stock: product.stock,
      };
    });

    success(res, parsedProducts);
  } catch (err) {
    internalError(res);
  }
};
