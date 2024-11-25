import type { Request, Response } from 'express';

import { getUser } from '../../models/user';
import { orderDTOAdapter } from '../../adapters/order';
import { addOrder } from '../../models/order';
import type { ProductDTO } from '../../shared/types/product';
import { getProduct } from '../../models/product';
import { badRequest, created, internalError } from '../../shared/utils';

export const addOrderController = async (req: Request, res: Response) => {
  try {
    const orderUser = await getUser(req.body.user);

    if (!orderUser) {
      badRequest(res, 'Order User Not Found');
      return;
    }

    const orderProducts: ProductDTO[] = [];

    for (const orderProductId of req.body.products) {
      const product = await getProduct(orderProductId);

      if (!product) {
        badRequest(res, 'Product Not Found');

        return;
      }

      orderProducts.push(product);
    }

    const newOrder = orderDTOAdapter(orderUser, orderProducts);

    const result = await addOrder(newOrder);

    created(res, result);
  } catch (err) {
    internalError(res);
  }
};
