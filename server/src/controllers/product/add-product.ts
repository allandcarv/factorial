import { Request, Response } from 'express';

import { getProductType } from '../../models/product-type';
import { badRequest } from '../../utils/bad-request';
import type { NewProduct, Product } from '../../types/product';
import { addProduct } from '../../models/product';
import { created } from '../../utils/created';
import { internalError } from '../../utils/internal-error';

export const addProductController = async (req: Request, res: Response) => {
  try {
    const productType = await getProductType(req.body.productType);

    if (!productType) {
      badRequest(res, 'Product Type Not Found');
      return;
    }

    const newProduct: NewProduct = {
      title: req.body.title,
      productType: req.body.productType,
      description: req.body.description,
      stock: req.body.stock,
    };

    const result = await addProduct(newProduct);

    const product: Product = {
      id: result.id,
      title: result.title,
      productType: {
        id: productType.id,
        title: productType.title,
      },
      description: result.description,
      stock: result.stock,
    };

    created(res, product);
  } catch (err) {
    internalError(res);
  }
};
