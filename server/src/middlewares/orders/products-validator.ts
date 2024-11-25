import type { Request, Response, NextFunction } from 'express';
import { getProduct } from '../../models/product';
import type { OrderProductDTO } from '../../shared/types/order';
import { badRequest } from '../../shared/utils';

export const productsValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products: OrderProductDTO[] = req.body.products;

  for (const product of products) {
    const p = await getProduct(product.id);

    if (!p) {
      badRequest(res, `Product ${product.title} Not Found`);

      return;
    }
  }

  next();
};
