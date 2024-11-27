import { API_BASE_URL } from '../../constants';
import type { Order } from '../../types';

export const fetchOrder = async (orderId: string): Promise<Order> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const order: Order = await response.json();

    return order;
  } catch (err) {
    throw new Error(`Error on Getting Order: ${err}`);
  }
};
