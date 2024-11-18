import fs from 'node:fs/promises';

import type {
  UpdateProductType,
  ProductTypeDTO,
} from '../../types/product-type';
import { PRODUCT_TYPES_FILE } from './constants';
import { getProductTypes } from './get-product-types';

export const updateProductType = async (
  updatedProductType: UpdateProductType
): Promise<ProductTypeDTO> => {
  try {
    const productTypes = await getProductTypes();

    const productTypeToUpdate = productTypes.find(
      (productType) => productType.id === updatedProductType.id
    );

    if (!productTypeToUpdate) {
      /**
       * Controller is checking if the product type exists,
       * if no product type is found, the controller should
       * be fixed, hence, the following error
       */
      throw new Error('Product type not found');
    }

    productTypeToUpdate.description =
      updatedProductType.description ?? productTypeToUpdate.description;
    productTypeToUpdate.product_group =
      updatedProductType.productGroup ?? productTypeToUpdate.product_group;
    productTypeToUpdate.title =
      updatedProductType.title ?? productTypeToUpdate.title;

    await fs.writeFile(PRODUCT_TYPES_FILE, JSON.stringify(productTypes));

    return productTypeToUpdate;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product type: ${err}`);
  }
};
