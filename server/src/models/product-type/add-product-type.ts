import fs from 'node:fs/promises';

import type { NewProductType, ProductTypeDTO } from '../../types/product-type';
import { uuid } from '../../utils/uuid';
import { getProductTypes } from './get-product-types';
import { PRODUCT_TYPES_FILE } from '../../shared/constants';

export const addProductType = async (
  newProductType: NewProductType
): Promise<ProductTypeDTO> => {
  try {
    const productTypes = await getProductTypes();

    const productType: ProductTypeDTO = {
      id: uuid(),
      title: newProductType.title,
      product_group: newProductType.productGroup,
      description: newProductType.description,
    };

    productTypes.push(productType);

    await fs.writeFile(PRODUCT_TYPES_FILE, JSON.stringify(productTypes));

    return productType;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product type: ${err}`);
  }
};
