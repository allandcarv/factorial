import { lazy, Suspense, type FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Header, Loading } from './components';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes/AppRoutes';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 10000, // 5 minutes
    },
  },
});

const ErrorPage = lazy(() => import('./pages/ErrorPage'));

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<ErrorPage />}>
            <Header />
            <AppRoutes />
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
