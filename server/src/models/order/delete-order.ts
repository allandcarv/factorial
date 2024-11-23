import fs from 'node:fs/promises';

import { getOrders } from './get-orders';
import { ORDERS_FILE } from '../../shared/constants';

export const deleteOrder = async (orderId: string): Promise<void> => {
  try {
    const orders = await getOrders();

    const newOrders = orders.filter((order) => order.id !== orderId);

    await fs.writeFile(ORDERS_FILE, JSON.stringify(newOrders));
  } catch (err) {
    console.error(err);

    throw new Error(`Error on removing order: ${err}`);
  }
};
