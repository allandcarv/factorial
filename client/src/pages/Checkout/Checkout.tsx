import type { FC } from 'react';

import { useAppStore } from '../../shared/store/hooks';
import { CheckoutTable } from '../../components/CheckoutTable/CheckoutTable';

import styles from './Checkout.module.css';
import { useAddNewOrder } from '../../shared/hooks/use-add-new-order';

const Checkout: FC = () => {
  const order = useAppStore((store) => store.order);
  const { onAddOrder } = useAddNewOrder();

  return (
    <>
      <h1 className={styles['checkout-title']}>My Checkout</h1>
      <section>
        {order.products.length ? (
          <>
            <CheckoutTable products={order.products} total={order.total} />
            <button className={styles['submit-button']} onClick={onAddOrder}>
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
