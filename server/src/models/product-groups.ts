import fs from 'node:fs/promises';
import path from 'node:path';

import type { ProductGroupsDTO } from '../types/product-groups';

export const getProductGroups = async (): Promise<ProductGroupsDTO[]> => {
  const productGroupsBuffer = await fs.readFile(
    path.join(__dirname, '..', '..', 'db', 'product-groups.json')
  );

  const productGroups: ProductGroupsDTO[] = JSON.parse(
    productGroupsBuffer.toString()
  );

  return productGroups;
};
