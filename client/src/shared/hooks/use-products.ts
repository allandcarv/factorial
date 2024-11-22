import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchProducts } from '../services/api';

export const useProducts = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return {
    products: data,
  };
};
