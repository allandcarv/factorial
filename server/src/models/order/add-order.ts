import fs from 'node:fs/promises';

import type { OrderDTO } from '../../types/order';
import { getOrders } from './get-orders';
import { ORDERS_FILE } from '../../shared/constants';

export const addOrder = async (order: OrderDTO): Promise<OrderDTO> => {
  try {
    const orders = await getOrders();

    orders.push(order);

    await fs.writeFile(ORDERS_FILE, JSON.stringify(orders));

    return order;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on adding order: ${err}`);
  }
};
