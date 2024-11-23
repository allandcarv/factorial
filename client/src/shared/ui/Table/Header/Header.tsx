import type { FC, PropsWithChildren, HTMLAttributes } from 'react';

type TableHeaderProps = PropsWithChildren<
  HTMLAttributes<HTMLTableSectionElement>
>;

export const Header: FC<TableHeaderProps> = ({
  children,
  ...tableHeaderProps
}) => {
  return <thead {...tableHeaderProps}>{children}</thead>;
};

Header.displayName = 'Table.Header';
