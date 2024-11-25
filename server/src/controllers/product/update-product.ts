import { Request, Response } from 'express';

import { updateProduct } from '../../models/product';
import { getProductType } from '../../models/product-type';
import type { UpdateProduct, Product } from '../../shared/types/product';
import { productAdapter } from '../../adapters/product';
import { success, internalError } from '../../shared/utils';

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const newProduct: UpdateProduct = {
      id: req.params.id,
      description: req.body.description,
      price: req.body.price,
      productType: req.body.productType,
      stock: req.body.stock,
      title: req.body.title,
    };

    const product = await updateProduct(newProduct);

    const productType = await getProductType(product.product_type);

    if (!productType) {
      throw new Error('Product Type Not Found');
    }

    const result = productAdapter(product, productType);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
