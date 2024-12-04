import * as express from 'express';

import type { ProductDTO } from './product';

declare global {
  namespace Express {
    interface Request {
      product?: ProductDTO;
    }
  }
}
