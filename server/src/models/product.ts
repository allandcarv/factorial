import fs from 'node:fs/promises';
import path from 'node:path';

import type {
  NewProduct,
  Product,
  ProductDTO,
  UpdateProduct,
} from '../types/product';
import { getProductType } from './product-types';
import { uuid } from '../utils/uuid';

const PRODUCTS_FILE = path.join(__dirname, '..', '..', 'db', 'products.json');

export const getProducts = async (): Promise<ProductDTO[]> => {
  try {
    const productsBuffer = await fs.readFile(PRODUCTS_FILE);

    const products: ProductDTO[] = JSON.parse(productsBuffer.toString());

    return products;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting products: ${err}`);
  }
};

export const getProduct = async (
  id: string
): Promise<ProductDTO | undefined> => {
  try {
    const products: ProductDTO[] = await getProducts();

    const product = products.find((product) => product.id === id);

    return product;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product: ${err}`);
  }
};

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

    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products));

    return productToUpdate;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on updating product: ${err}`);
  }
};
