import { Request, Response } from 'express';

import { getProduct, updateProduct } from '../../models/product';
import { notFound } from '../../utils/not-found';
import type { ProductTypeDTO } from '../../types/product-type';
import { getProductType } from '../../models/product-type';
import type { UpdateProduct, Product } from '../../types/product';
import { badRequest } from '../../utils/bad-request';
import { internalError } from '../../utils/internal-error';
import { success } from '../../utils/success';

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const product = await getProduct(productId);

    if (!product) {
      notFound(res, 'Product Not Found');
      return;
    }

    let productType: ProductTypeDTO | undefined;

    if (req.body.productType) {
      productType = await getProductType(req.body.productType);

      if (!productType) {
        badRequest(res, 'Product Type Not Found');
        return;
      }
    }

    const newProduct: UpdateProduct = {
      id: req.params.id,
      title: req.body.title,
      productType: req.body.productType,
      description: req.body.description,
      stock: req.body.stock,
    };

    const updatedProduct = await updateProduct(newProduct);

    productType = await getProductType(updatedProduct.product_type);

    const result: Product = {
      id: updatedProduct.id,
      title: updatedProduct.title,
      productType: {
        id: productType?.id,
        title: productType?.title,
      },
      description: updatedProduct.description,
      stock: updatedProduct.stock,
    };

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
