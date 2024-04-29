import { getSchemaUrl } from '@colibrijs/module-utils';
import type { IComponent } from '@colibrijs/types';
import { useQuery } from '@tanstack/react-query';
import { Table, type TableColumnsType, Typography } from 'antd';
import React, { useCallback, useMemo, type HTMLAttributes } from 'react';

import { useApi, COMPONENTS_KEY } from '../../hooks/use-api';
import { ComponentsAdd } from '../components-add';
import { ComponentsRemove } from '../components-remove';

export function ComponentsList() {
  const api = useApi();

  const { data: components, isLoading } = useQuery({
    queryFn: () => api.components.get(),
    queryKey: [COMPONENTS_KEY],
  });

  const getRowClassName = useCallback((component: IComponent) => component.id, []);
  const setRowAttributes = useCallback(
    (component: IComponent): HTMLAttributes<HTMLTableRowElement> => ({
      // @ts-expect-error не верит что tr можно задать атрибут с именем data-testid
      'data-testid': `components-list__${component.id}`,
    }),
    []
  );

  const columns = useMemo(
    (): TableColumnsType<IComponent> => [
      { title: 'Компонент', dataIndex: 'name', key: 'name' },
      { title: 'Библиотека', dataIndex: 'libraryName', key: 'libraryName' },
      {
        title: 'Ссылка',
        dataIndex: 'src',
        key: 'src',
        render: (_, component) => (
          <Typography.Link href={getSchemaUrl(component)} target="_blank" rel="noreferrer">
            {getSchemaUrl(component)}
          </Typography.Link>
        ),
      },
      {
        key: 'actions',
        render: (_, component) => <ComponentsRemove component={component} />,
      },
    ],
    []
  );

  const Footer = useCallback(() => {
    return <ComponentsAdd />;
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={components}
      loading={isLoading}
      pagination={false}
      rowKey={getRowClassName}
      footer={Footer}
      onRow={setRowAttributes}
    />
  );
}
