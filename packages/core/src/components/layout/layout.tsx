import { ConfigProvider, Layout as AntdLayout, Menu, type MenuProps, theme } from 'antd';
import React, { useMemo } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';

import { styles } from './layout.styles';

export type Props = PropsWithChildren<{
  sidebar?: ReactNode;
}>;

export function Layout(props: Props) {
  const { children, sidebar } = props;
  const hasSidebar = useMemo(() => Boolean(sidebar), [sidebar]);

  const darkTheme = useMemo(() => ({ algorithm: theme.darkAlgorithm }), []);

  const menuItems: MenuProps['items'] = useMemo(
    () => [
      { key: 'pages', label: <a href="/pages/">Pages</a> },
      { key: 'components', label: <a href="/components/">Components</a> },
    ],
    []
  );

  return (
    <AntdLayout style={styles.root}>
      <AntdLayout.Header>
        <Menu items={menuItems} mode="horizontal" theme="dark" />
      </AntdLayout.Header>
      <AntdLayout hasSider={hasSidebar}>
        {hasSidebar && (
          <AntdLayout.Sider theme="dark" width={350} style={styles.sidebar}>
            <ConfigProvider theme={darkTheme}>{sidebar}</ConfigProvider>
          </AntdLayout.Sider>
        )}
        <AntdLayout.Content style={styles.content}>{children}</AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
}
