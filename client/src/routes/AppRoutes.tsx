import { lazy, type FC } from 'react';
import { Routes, Route } from 'react-router';

import { Main } from '../components';
import { Home } from '../pages';

const Products = lazy(() => import('../pages/Products/Products'));
const Checkout = lazy(() => import('../pages/Checkout/Checkout'));

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
