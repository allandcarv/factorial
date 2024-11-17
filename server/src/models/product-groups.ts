import fs from 'node:fs/promises';
import path from 'node:path';

import type {
  NewProductGroup,
  ProductGroupDTO,
  UpdateProductGroup,
} from '../types/product-group';
import { uuid } from '../utils/uuid';

const PRODUCT_GROUPS_FILE = path.join(
  __dirname,
  '..',
  '..',
  'db',
  'product-groups.json'
);

export const getProductGroups = async (): Promise<ProductGroupDTO[]> => {
  try {
    const productGroupsBuffer = await fs.readFile(PRODUCT_GROUPS_FILE);

    const productGroups: ProductGroupDTO[] = JSON.parse(
      productGroupsBuffer.toString()
    );
    return productGroups;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product groups: ${err}`);
  }
};

export const getProductGroup = async (
  id: string
): Promise<ProductGroupDTO | undefined> => {
  try {
    const productGroups = await getProductGroups();

    const productGroup = productGroups.find(
      (productGroup) => productGroup.id === id
    );

    return productGroup;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};

export const addProductGroup = async (
  newProductGroup: NewProductGroup
): Promise<ProductGroupDTO> => {
  try {
    const productGroups = await getProductGroups();

    const productGroup: ProductGroupDTO = {
      id: uuid(),
      title: newProductGroup.title,
      description: newProductGroup.description,
    };

    productGroups.push(productGroup);

    await fs.writeFile(PRODUCT_GROUPS_FILE, JSON.stringify(productGroups));

    return productGroup;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};

export const updateProductGroup = async (
  updatedProductGroup: UpdateProductGroup
): Promise<ProductGroupDTO> => {
  try {
    const productGroups = await getProductGroups();

    const productGroupIdx = productGroups.findIndex(
      (productGroup) => productGroup.id === updatedProductGroup.id
    );

    productGroups[productGroupIdx] = {
      id: productGroups[productGroupIdx].id,
      title: updatedProductGroup.title ?? productGroups[productGroupIdx].title,
      description:
        updatedProductGroup.description ??
        productGroups[productGroupIdx].description,
    };

    await fs.writeFile(PRODUCT_GROUPS_FILE, JSON.stringify(productGroups));

    return productGroups[productGroupIdx];
  } catch (err) {
    console.error(err);

    throw new Error(`Error on replacing product group: ${err}`);
  }
};
