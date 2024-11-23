import type { FC } from 'react';

import { useAppStore } from '../../shared/store/hooks';
import { CheckoutTable } from '../../components/CheckoutTable/CheckoutTable';

import styles from './Checkout.module.css';

const Checkout: FC = () => {
  const selectedProducts = useAppStore((store) => store.selectedProducts);

  return (
    <>
      <h1 className={styles['checkout-title']}>My Checkout</h1>
      <section>
        {selectedProducts.length ? (
          <>
            <CheckoutTable products={selectedProducts} />
            <button className={styles['submit-button']}>Place Order</button>
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
