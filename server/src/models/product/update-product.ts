import fs from 'node:fs/promises';

import type { UpdateProduct, ProductDTO } from '../../types/product';
import { getProducts } from './get-products';
import { PRODUCTS_FILE } from '../../shared/constants';

export const updateProduct = async (
  updatedProduct: UpdateProduct
): Promise<ProductDTO> => {
  try {
    const products = await getProducts();

    const productToUpdate = products.find(
      (product) => product.id === updatedProduct.id
    );

    if (!productToUpdate) {
      /**
       * Controller is checking if the product exists,
       * if no product is found, the controller should
       * be fixed, hence, the following error
       */
      throw new Error('Product not found');
    }

    productToUpdate.title = updatedProduct.title ?? productToUpdate.title;
    productToUpdate.product_type =
      updatedProduct.productType ?? productToUpdate.product_type;
    productToUpdate.description =
      updatedProduct.description ?? productToUpdate.description;
    productToUpdate.stock = updatedProduct.stock ?? productToUpdate.stock;
    productToUpdate.price = updatedProduct.price ?? productToUpdate.price;

    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products));

    return productToUpdate;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on updating product: ${err}`);
  }
};
