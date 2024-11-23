import fs from 'node:fs/promises';

import type { OrderDTO } from '../../types/order';
import { ORDERS_FILE } from '../../shared/constants';

export const getOrders = async (): Promise<OrderDTO[]> => {
  try {
    const ordersBuffer = await fs.readFile(ORDERS_FILE);

    const orders: OrderDTO[] = JSON.parse(ordersBuffer.toString());

    return orders;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting orders: ${err}`);
  }
};
