import * as express from 'express';

import type { ProductDTO } from './product';
import type { ProductTypeDTO } from '../../src/shared/types/product-type';

declare global {
  namespace Express {
    interface Request {
      product?: ProductDTO;
      productType?: ProductTypeDTO;
    }
  }
}
