import fs from 'node:fs/promises';
import path from 'node:path';

import type { ProductGroupDTO } from '../types/product-group';

export const getProductGroups = async (): Promise<ProductGroupDTO[]> => {
  const productGroupsBuffer = await fs.readFile(
    path.join(__dirname, '..', '..', 'db', 'product-groups.json')
  );

  const productGroups: ProductGroupDTO[] = JSON.parse(
    productGroupsBuffer.toString()
  );

  return productGroups;
};
