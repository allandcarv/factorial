import type { FC, PropsWithChildren, HTMLAttributes } from 'react';

type TableFooterProps = PropsWithChildren<
  HTMLAttributes<HTMLTableSectionElement>
>;

export const Footer: FC<TableFooterProps> = ({
  children,
  ...tableFooterProps
}) => {
  return <tfoot {...tableFooterProps}>{children}</tfoot>;
};

Footer.displayName = 'Table.Footer';
