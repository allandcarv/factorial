import type { FC } from 'react';

import styles from './ErrorBody.module.css';

export const ErrorBody: FC = () => {
  return (
    <main className={styles.main}>
      <p className={styles.message}>
        <strong>Oooops... Something Went Wrong</strong>
      </p>
    </main>
  );
};
