export interface OrderProduct {
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
  user: OrderUser;
  products: OrderProduct[];
  created: number;
}

export interface NewOrder {
  user: string;
  products: string[];
}

export interface UpdateOrder extends Partial<NewOrder> {
  id: string;
}
