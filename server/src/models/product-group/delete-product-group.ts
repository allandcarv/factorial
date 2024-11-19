import fs from 'node:fs/promises';

import { getProductGroups } from './get-product-groups';
import { PRODUCT_GROUPS_FILE } from '../../shared/constants';

export const deleteProductGroup = async (
  productGroupId: string
): Promise<void> => {
  try {
    const productGroups = await getProductGroups();

    const newProductGroups = productGroups.filter(
      (productGroup) => productGroup.id !== productGroupId
    );

    await fs.writeFile(PRODUCT_GROUPS_FILE, JSON.stringify(newProductGroups));
  } catch (err) {
    console.error(err);

    throw new Error(`Error on replacing product group: ${err}`);
  }
};
