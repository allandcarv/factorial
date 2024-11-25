import type { ProcessedOrder } from './types/order';

export const API_BASE_URL = 'http://localhost:3001';

export const QUERY_PARAMS = {
  Group: 'group',
};

export const INITIAL_ORDER_STATE: Readonly<ProcessedOrder> = {
  products: [],
  total: 0,
};
