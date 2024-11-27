import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';

import { fetchOrder, fetchProduct } from '../services/api';

export const useGetOrder = (orderId: string) => {
  const { data: order } = useSuspenseQuery({
    queryKey: ['orders', orderId],
    queryFn: () => fetchOrder(orderId),
  });

  const products = useSuspenseQueries({
    queries: order.products.map((product) => ({
      queryKey: ['products', product.id],
      queryFn: () => fetchProduct(product.id),
      enabled: !!order,
    })),
  });

  return {
    products,
    order,
  };
};
