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

    const productGroupToUpdate = productGroups.find(
      (productGroup) => productGroup.id === updatedProductGroup.id
    );

    if (!productGroupToUpdate) {
      /**
       * Controller is checking if the product group exists,
       * if no product group is found, the controller should
       * be fixed, hence, the following error
       */
      throw new Error('Product Group not Found');
    }

    productGroupToUpdate.description =
      updatedProductGroup.description ?? productGroupToUpdate.description;
    productGroupToUpdate.title =
      updatedProductGroup.title ?? productGroupToUpdate.title;

    await fs.writeFile(PRODUCT_GROUPS_FILE, JSON.stringify(productGroups));

    return productGroupToUpdate;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on replacing product group: ${err}`);
  }
};
