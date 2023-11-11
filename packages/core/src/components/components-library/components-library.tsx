import { api, type Component } from '@colibrijs/api-client';
import { useQuery } from '@tanstack/react-query';
import { Button, Flex, Space, Table, type TableProps, type TableColumnsType } from 'antd';
import React, { useMemo, useState, type CSSProperties, useCallback } from 'react';

import { ComponentsActions } from './components-actions';
import { idsAsKeys } from '../../utils/ids-as-keys';
import { ComponentEditor } from '../component-editor';

export interface Props {
  /**
   * If true, user can add new components or delete old
   * @default false
   */
  editable?: boolean;

  /**
   * If true, user can select some component
   * @default false
   */
  selectable?: boolean;

  /** Called when component selected */
  onSelect?: (component: Component) => void;
}

const nullFn = () => {};

export function ComponentsLibrary(props: Props) {
  const { editable = false, selectable = false, onSelect = nullFn } = props;
  const [editorOpened, setEditorOpened] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const containerStyles = useMemo((): CSSProperties => ({ display: 'flex' }), []);

  const { data: components, isLoading } = useQuery({
    queryKey: ['components'],
    queryFn: () => api.components.findBy({}),
    select: idsAsKeys,
  });

  const columns = useMemo((): TableColumnsType<Component> => {
    const baseColumns: TableColumnsType<Component> = [
      { dataIndex: 'packageName', key: 'packageName', title: 'Package name' },
      { dataIndex: 'componentName', key: 'componentName', title: 'Component name' },
      { dataIndex: 'src', key: 'src', title: 'Source' },
    ];

    const editableColumns: TableColumnsType<Component> = [
      {
        dataIndex: 'actions',
        key: 'actions',
        title: 'Actions',
        align: 'end',
        render: (_, componentData) => <ComponentsActions componentData={componentData} />,
      },
    ];

    return editable ? [...baseColumns, ...editableColumns] : baseColumns;
  }, [editable]);

  const selection = useMemo((): TableProps<Component>['rowSelection'] => {
    return {
      type: 'radio',
      onSelect: (component, selected) => setSelectedComponent(selected ? component : null),
    };
  }, []);

  const selectHandler = useCallback(() => {
    if (!selectedComponent) return;
    onSelect(selectedComponent);
  }, [onSelect, selectedComponent]);

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
        rowSelection={selectable ? selection : undefined}
        size="small"
      />
      <ComponentEditor opened={editorOpened} onClose={toggleEditor} />
      <Flex justify="flex-end" gap="small">
        {editable && (
          <Button htmlType="button" type="primary" onClick={toggleEditor}>
            Add
          </Button>
        )}
        {selectable && (
          <Button htmlType="button" type="primary" onClick={selectHandler}>
            Select
          </Button>
        )}
      </Flex>
    </Space>
  );
}
