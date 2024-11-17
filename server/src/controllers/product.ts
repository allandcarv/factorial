import { Request, Response } from 'express';

import { getProducts } from '../models/product';
import { getProductTypes } from '../models/product-types';
import type { ProductTypeDTO } from '../types/product-type';
import type { Product } from '../types/product';

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
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
