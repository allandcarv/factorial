import type { FC } from 'react';

import styles from './Loading.module.css';

export const Loading: FC = () => {
  return (
    <aside className={styles['loading-overlay']}>
      <span className={`material-symbols-outlined ${styles.loading}`}>
        refresh
      </span>
    </aside>
  );
};
