import type { FC } from 'react';

import { AllProducts } from '../../components';

import styles from './Home.module.css';

export const Home: FC = () => {
  return (
    <>
      <h1 className={styles['home-title']}>Welcome to My Store</h1>
      <AllProducts />
    </>
  );
};
