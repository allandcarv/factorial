import type { FC } from 'react';

import { useAppStore } from '../../shared/store/hooks';
import { CheckoutTable } from '../../components/CheckoutTable/CheckoutTable';
import { useAddNewOrder } from '../../shared/hooks/use-add-new-order';
import { Loading } from '../../components';

import styles from './Checkout.module.css';

const Checkout: FC = () => {
  const order = useAppStore((store) => store.order);
  const { addOrder, isLoading } = useAddNewOrder();

  return (
    <>
      <h1 className={styles['checkout-title']}>My Checkout</h1>
      <section>
        {isLoading && <Loading />}
        {order.products.length ? (
          <>
            <CheckoutTable products={order.products} total={order.total} />
            <button className={styles['submit-button']} onClick={addOrder}>
              Place Order
            </button>
          </>
        ) : (
          <p>
            <strong>You don't have products yet...</strong>
          </p>
        )}
      </section>
    </>
  );
};

export default Checkout;
