import fs from 'node:fs/promises';
import path from 'node:path';

import type {
  NewProductType,
  ProductTypeDTO,
  UpdateProductType,
} from '../types/product-type';
import { getProductGroup } from './product-groups';
import { uuid } from '../utils/uuid';

const PRODUCT_TYPES_FILE = path.join(
  __dirname,
  '..',
  '..',
  'db',
  'product-types.json'
);

export const getProductTypes = async (): Promise<ProductTypeDTO[]> => {
  try {
    const productTypesBuffer = await fs.readFile(PRODUCT_TYPES_FILE);

    const productTypes: ProductTypeDTO[] = JSON.parse(
      productTypesBuffer.toString()
    );

    return productTypes;
  } catch (err) {
    console.error(err);
    throw new Error(`Error on getting product types: ${err}`);
  }
};

export const getProductType = async (
  id: string
): Promise<ProductTypeDTO | undefined> => {
  try {
    const productTypes = await getProductTypes();

    const productType = productTypes.find(
      (productType) => productType.id === id
    );

    return productType;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product type: ${err}`);
  }
};

export const addProductType = async (
  newProductType: NewProductType
): Promise<ProductTypeDTO> => {
  try {
    const productTypes = await getProductTypes();

    const productType: ProductTypeDTO = {
      id: uuid(),
      title: newProductType.title,
      product_group: newProductType.productGroup,
      description: newProductType.description,
    };

    productTypes.push(productType);

    await fs.writeFile(PRODUCT_TYPES_FILE, JSON.stringify(productTypes));

    return productType;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};

export const updateProductType = async (
  updatedProductType: UpdateProductType
): Promise<ProductTypeDTO> => {
  try {
    const productTypes = await getProductTypes();

    const productTypeIdx = productTypes.findIndex(
      (productType) => productType.id === updatedProductType.id
    );

    const productTypeToUpdate = productTypes.find(
      (productType) => productType.id === updatedProductType.id
    );

    if (!productTypeToUpdate) {
      /**
       * Controller is checking if the product type exists,
       * if no product type is found, the controller should
       * be fixed, hence, the following error
       */
      throw new Error('Product type not found');
    }

    productTypeToUpdate.description =
      updatedProductType.description ?? productTypeToUpdate.description;
    productTypeToUpdate.product_group =
      updatedProductType.productGroup ?? productTypeToUpdate.product_group;
    productTypeToUpdate.title =
      updatedProductType.title ?? productTypeToUpdate.title;

    await fs.writeFile(PRODUCT_TYPES_FILE, JSON.stringify(productTypes));

    return productTypeToUpdate;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};
