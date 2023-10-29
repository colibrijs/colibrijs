'use client';

import { api, type Component } from '@colibrijs/api-client';
import { useQuery } from '@tanstack/react-query';
import { Button, Space, Table, type TableColumnsType } from 'antd';
import React, { useMemo, useState, type CSSProperties, useCallback } from 'react';

import { ComponentsActions } from './components-actions';
import { idsAsKeys } from '../../utils/ids-as-keys';
import { ComponentEditor } from '../component-editor';

export function ComponentsLibrary() {
  const [editorOpened, setEditorOpened] = useState(false);
  const containerStyles = useMemo((): CSSProperties => ({ display: 'flex' }), []);

  const { data: components, isLoading } = useQuery({
    queryKey: ['components'],
    queryFn: () => api.components.findBy({}),
    select: idsAsKeys,
  });

  const columns = useMemo(
    (): TableColumnsType<Component> => [
      { dataIndex: 'id', key: 'id', title: 'ID' },
      { dataIndex: 'packageName', key: 'packageName', title: 'Package name' },
      { dataIndex: 'componentName', key: 'componentName', title: 'Component name' },
      { dataIndex: 'src', key: 'src', title: 'Source' },
      {
        dataIndex: 'actions',
        key: 'actions',
        title: 'Actions',
        align: 'end',
        render: (_, componentData) => <ComponentsActions componentData={componentData} />,
      },
    ],
    []
  );

  const toggleEditor = useCallback(() => {
    setEditorOpened((currentlyOpened) => !currentlyOpened);
  }, []);

  return (
    <Space direction="vertical" size="large" style={containerStyles}>
      <Table
        columns={columns}
        dataSource={components}
        loading={isLoading}
        pagination={false}
        size="small"
      />
      <Button htmlType="button" type="primary" onClick={toggleEditor}>
        Add
      </Button>
      <ComponentEditor opened={editorOpened} onClose={toggleEditor} />
    </Space>
  );
}
