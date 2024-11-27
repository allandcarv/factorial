import type { FC } from 'react';
import { useSearchParams } from 'react-router';

import { QUERY_PARAMS } from '../../shared/constants';
import { useGetOrder } from '../../shared/hooks/';
import { OrderTable } from '../../components/OrderTable/OrderTable';

const Order: FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get(QUERY_PARAMS.OrderId);

  const { order, products } = useGetOrder(orderId ?? '');
  const total = products.reduce((acc, cur) => (acc += cur.data.price), 0);

  const orderDate = new Date(order.created);

  return (
    <>
      <h1>
        {`Order # ${orderDate.getDate()} / ${
          orderDate.getMonth() + 1
        } / ${orderDate.getFullYear()}`}
      </h1>
      <section>
        <OrderTable
          products={products.map((product) => product.data)}
          total={total}
        />
      </section>
    </>
  );
};

export default Order;
