import fs from 'node:fs/promises';

import type {
  NewProductGroup,
  ProductGroupDTO,
} from '../../types/product-group';
import { getProductGroups } from './get-product-groups';
import { PRODUCT_GROUPS_FILE } from '../../shared/constants';
import { productGroupDTOAdapter } from '../../adapters/product-group';

export const addProductGroup = async (
  productGroup: NewProductGroup
): Promise<ProductGroupDTO> => {
  try {
    const productGroups = await getProductGroups();

    const newProductGroup: NewProductGroup = {
      title: productGroup.title,
      description: productGroup.description,
    };

    const result = productGroupDTOAdapter(newProductGroup);

    productGroups.push(result);

    await fs.writeFile(PRODUCT_GROUPS_FILE, JSON.stringify(productGroups));

    return result;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};
