import { Suspense, type FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Loading } from './components/Loading/Loading';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
});

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Header />
        <Home />
      </Suspense>

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
