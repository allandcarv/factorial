import type { NewOrder, OrderDTO } from '../../shared/types/order';
import type { ProductDTO } from '../../shared/types/product';
import type { UserDTO } from '../../shared/types/user';
import { uuid } from '../../shared/utils/uuid';

export const orderDTOAdapter = (
  user: UserDTO,
  products: ProductDTO[]
): OrderDTO => ({
  id: uuid(),
  created: new Date().getTime(),
  products: products.map((product) => ({
    id: product.id,
    price: product.price,
    title: product.title,
  })),
  user: {
    id: user.id,
    name: user.name,
  },
});
