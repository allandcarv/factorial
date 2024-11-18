import fs from 'node:fs/promises';

import type {
  NewProductGroup,
  ProductGroupDTO,
} from '../../types/product-group';
import { uuid } from '../../utils/uuid';
import { PRODUCT_GROUPS_FILE } from './constants';
import { getProductGroups } from './get-product-groups';

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
