import { Request, Response } from 'express';

import { updateProduct } from '../../models/product';
import { getProductType } from '../../models/product-type';
import type { UpdateProduct, Product } from '../../types/product';
import { internalError } from '../../utils/internal-error';
import { success } from '../../utils/success';
import { productAdapter } from '../../adapters/product';

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
