import fs from 'node:fs/promises';
import path from 'node:path';

import type { ProductGroupDTO } from '../types/product-group';

export const getProductGroups = async (): Promise<ProductGroupDTO[]> => {
  try {
    const productGroupsBuffer = await fs.readFile(
      path.join(__dirname, '..', '..', 'db', 'product-groups.json')
    );

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
