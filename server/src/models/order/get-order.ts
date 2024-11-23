import type { OrderDTO } from '../../types/order';
import { getOrders } from './get-orders';

export const getOrder = async (id: string): Promise<OrderDTO | undefined> => {
  try {
    const orders: OrderDTO[] = await getOrders();

    const order = orders.find((order) => order.id === id);

    return order;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting order: ${err}`);
  }
};
