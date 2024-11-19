import fs from 'node:fs/promises';

import type { NewProduct, ProductDTO } from '../../types/product';
import { uuid } from '../../utils/uuid';
import { getProducts } from './get-products';
import { PRODUCTS_FILE } from '../../shared/constants';

export const addProduct = async (
  newProduct: NewProduct
): Promise<ProductDTO> => {
  try {
    const products = await getProducts();

    const product: ProductDTO = {
      id: uuid(),
      title: newProduct.title,
      product_type: newProduct.productType,
      description: newProduct.description,
      stock: newProduct.stock,
    };

    products.push(product);

    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products));

    return product;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};
