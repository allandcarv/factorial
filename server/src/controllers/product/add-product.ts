import type { Request, Response } from 'express';

import { getProductType } from '../../models/product-type';
import { badRequest } from '../../shared/utils/bad-request';
import { addProduct } from '../../models/product';
import { created } from '../../shared/utils/created';
import { internalError } from '../../shared/utils/internal-error';
import { productDTOAdapter } from '../../adapters/product/product-dto';
import { productAdapter } from '../../adapters/product';

export const addProductController = async (req: Request, res: Response) => {
  try {
    const productType = await getProductType(req.body.productType);

    if (!productType) {
      badRequest(res, 'Product Type Not Found');
      return;
    }

    const newProduct = productDTOAdapter({
      description: req.body.description,
      price: req.body.price,
      productType: req.body.productType,
      stock: req.body.stock,
      title: req.body.title,
      imageUrl: req.body.imageUrl,
    });

    const result = await addProduct(newProduct);

    const product = productAdapter(result, productType);

    created(res, product);
  } catch (err) {
    internalError(res);
  }
};
