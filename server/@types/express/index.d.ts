import * as express from 'express';

import type { ProductDTO } from '../../src/shared/types/product';
import type { ProductTypeDTO } from '../../src/shared/types/product-type';
import type { ProductGroupDTO } from '../../src/shared/types/product-group';
import type { ProductRestrictionDTO } from '../../src/shared/types/product-restriction';

declare global {
  namespace Express {
    interface Request {
      product?: ProductDTO;
      productRestriction?: ProductRestrictionDTO;
      productType?: ProductTypeDTO;
      productGroup?: ProductGroupDTO;
    }
  }
}
