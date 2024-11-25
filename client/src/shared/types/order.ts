import type { Product } from './product';

export interface NewOrder {
  user: string;
  products: string[];
}

export interface OrderProduct {
  id: string;
  price: number;
  title: string;
}

export interface OrderUser {
  id: string;
  name: string;
}

export interface Order {
  id: string;
  created: number;
  products: OrderProduct[];
  user: OrderUser;
}

export interface ProcessedOrder {
  products: Product[];
  total: number;
}
