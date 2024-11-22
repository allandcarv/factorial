import type { FC } from 'react';

import styles from './Home.module.css';

export const Home: FC = () => {
  return (
    <main className={styles.main}>
      <h1>Welcome to My Store</h1>
    </main>
  );
};
