import type { Order, OrderDTO } from '../../shared/types/order';
import type { UserDTO } from '../../shared/types/user';

export const orderAdapter = (order: OrderDTO, user: UserDTO): Order => ({
  id: order.id,
  created: order.created,
  products: order.products,
  user: {
    id: user.id,
    name: user.name,
  },
});
