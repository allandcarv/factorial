export interface OrderProductDTO {
  id: string;
  title: string;
  price: number;
}

export interface OrderUser {
  id: string;
  name: string;
}

export interface OrderDTO {
  id: string;
  user: string;
  products: OrderProductDTO[];
  created: number;
}

export interface Order extends Omit<OrderDTO, 'user'> {
  user: OrderUser;
}

export type NewOrder = Omit<OrderDTO, 'id' | 'created'>;

export interface UpdateOrder extends Partial<Omit<NewOrder, 'created'>> {
  id: string;
}
