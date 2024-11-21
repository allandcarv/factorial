import fs from 'node:fs/promises';

import type { ProductGroupDTO } from '../../types/product-group';
import { getProductGroups } from './get-product-groups';
import { PRODUCT_GROUPS_FILE } from '../../shared/constants';

export const addProductGroup = async (
  productGroup: ProductGroupDTO
): Promise<ProductGroupDTO> => {
  try {
    const productGroups = await getProductGroups();

    productGroups.push(productGroup);

    await fs.writeFile(PRODUCT_GROUPS_FILE, JSON.stringify(productGroups));

    return productGroup;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};
