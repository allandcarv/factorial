import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Products } from './components/Products';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello World</h1>
      <Products />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
