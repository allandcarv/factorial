import { Request, Response } from 'express';

import { getProduct, getProducts } from '../models/product';
import { getProductType, getProductTypes } from '../models/product-types';
import type { ProductTypeDTO } from '../types/product-type';
import type { Product } from '../types/product';
import { internalErrorHandler } from '../utils/internal-error';

export const productsController = async (_req: Request, res: Response) => {
  try {
    const products = await getProducts();
    const productTypes = await getProductTypes();

    const mappedProductTypes = new Map<string, ProductTypeDTO>();

    productTypes.forEach((productType) =>
      mappedProductTypes.set(productType.id, productType)
    );

    const result: Product[] = products.map((product) => {
      const productType = mappedProductTypes.get(product.product_type);

      return {
        description: product.description,
        id: product.id,
        productType: {
          id: productType?.id,
          title: productType?.title,
        },
        stock: product.stock,
        title: product.title,
      };
    });

    res.status(200).json(result);
  } catch (err) {
    internalErrorHandler(res);
  }
};

export const productController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getProduct(id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    const productType = await getProductType(product.product_type);

    const result: Product = {
      description: product.description,
      id: product.id,
      productType: {
        id: productType?.id,
        title: productType?.title,
      },
      stock: product.stock,
      title: product.title,
    };

    res.status(200).json(result);
  } catch (err) {
    internalErrorHandler(res);
  }
};
