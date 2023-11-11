import { DeleteOutlined } from '@ant-design/icons';
import type { Element } from '@colibrijs/api-client';
import { Button } from 'antd';
import React, { useCallback, type MouseEvent } from 'react';

export interface Props {
  element: Element;
  removingInProgress: boolean;
  onRemove: (element: Element) => void;
}

export function ElementExtra(props: Props) {
  const { element, removingInProgress, onRemove } = props;

  const removeHandler = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      onRemove(element);
    },
    [element, onRemove]
  );

  return (
    <Button
      htmlType="button"
      icon={<DeleteOutlined />}
      loading={removingInProgress}
      size="small"
      type="text"
      onClick={removeHandler}
    />
  );
}
