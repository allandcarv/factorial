import fs from 'node:fs/promises';

import type {
  UpdateProductGroup,
  ProductGroupDTO,
} from '../../shared/types/product-group';
import { getProductGroups } from './get-product-groups';
import { PRODUCT_GROUPS_FILE } from '../../shared/constants';

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
