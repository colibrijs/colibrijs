import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useCallback, type MouseEvent } from 'react';

export interface Props {
  removingInProgress: boolean;
  onRemove: () => void;
}

export function ElementExtra(props: Props) {
  const { removingInProgress, onRemove } = props;

  const removeHandler = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      onRemove();
    },
    [onRemove]
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
