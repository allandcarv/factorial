export interface OrderProductDTO {
  id: string;
  title: string;
  price: number;
}

export interface OrderDTO {
  id: string;
  user: string;
  products: OrderProductDTO[];
  created: number;
}

export type NewOrder = Omit<OrderDTO, 'id'>;

export interface UpdateOrder extends Partial<Omit<NewOrder, 'created'>> {
  id: string;
}
