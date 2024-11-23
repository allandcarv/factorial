import { Request, Response } from 'express';

import { updateProduct } from '../../models/product';
import { getProductType } from '../../models/product-type';
import type { UpdateProduct, Product } from '../../shared/types/product';
import { internalError } from '../../shared/utils/internal-error';
import { success } from '../../shared/utils/success';
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
