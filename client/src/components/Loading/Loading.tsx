import type { FC } from 'react';

import styles from './Loading.module.css';

export const Loading: FC = () => {
  return (
    <span className={`material-symbols-outlined ${styles.loading}`}>
      refresh
    </span>
  );
};
