import fs from 'node:fs/promises';

import type { ProductGroupDTO } from '../../types/product-group';
import { PRODUCT_GROUPS_FILE } from '../../shared/constants';

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
