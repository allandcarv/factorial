import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

export const Products: FC = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const requestData = await fetch('http://localhost:3001/products');

      return requestData.json();
    },
  });

  console.log(query);

  return <h2>Products Page</h2>;
};
