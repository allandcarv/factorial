import { API_BASE_URL } from '../../constants';
import type { NewOrder, Order } from '../../types';

export const addOrder = async (newOrder: NewOrder): Promise<Order> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const order: Order = await response.json();

    return order;
  } catch (err) {
    throw new Error(`Error on Adding new Order: ${err}`);
  }
};
