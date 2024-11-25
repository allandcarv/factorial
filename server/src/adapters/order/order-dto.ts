import type { NewOrder, OrderDTO } from '../../shared/types/order';
import { uuid } from '../../shared/utils/uuid';

export const orderDTOAdapter = (newOrder: NewOrder): OrderDTO => ({
  id: uuid(),
  created: new Date().getTime(),
  products: newOrder.products,
  user: newOrder.user,
});
