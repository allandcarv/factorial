import { type FC } from 'react';
import { Outlet } from 'react-router';

import styles from './Main.module.css';

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
};
