import * as express from 'express';

import type { ProductDTO } from './product';
import type { ProductTypeDTO } from '../../src/shared/types/product-type';
import type { ProductGroupDTO } from '../../src/shared/types/product-group';

declare global {
  namespace Express {
    interface Request {
      product?: ProductDTO;
      productType?: ProductTypeDTO;
      productGroup?: ProductGroupDTO;
    }
  }
}
