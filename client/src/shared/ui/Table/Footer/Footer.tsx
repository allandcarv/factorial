import type { FC, PropsWithChildren, HTMLAttributes } from 'react';

import styles from './Footer.module.css';

type TableFooterProps = PropsWithChildren<
  HTMLAttributes<HTMLTableSectionElement>
>;

export const Footer: FC<TableFooterProps> = ({
  children,
  className,
  ...tableFooterProps
}) => {
  return (
    <tfoot className={`${styles.footer} ${className}`} {...tableFooterProps}>
      {children}
    </tfoot>
  );
};

Footer.displayName = 'Table.Footer';
