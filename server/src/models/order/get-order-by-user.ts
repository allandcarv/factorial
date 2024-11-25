import type { OrderDTO } from '../../shared/types/order';
import { getOrders } from './get-orders';

export const getOrderByUser = async (
  userId: string
): Promise<OrderDTO | undefined> => {
  try {
    const orders: OrderDTO[] = await getOrders();

    const order = orders.find((order) => order.user.id === userId);

    return order;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting order: ${err}`);
  }
};
