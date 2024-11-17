import fs from 'node:fs/promises';
import path from 'node:path';

import type { NewProductType, ProductTypeDTO } from '../types/product-type';
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
