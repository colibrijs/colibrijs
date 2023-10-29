import { DeleteOutlined } from '@ant-design/icons';
import { api, type Component } from '@colibrijs/api-client';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
import React, { useCallback } from 'react';

interface Props {
  componentData: Component;
}

export function ComponentsActions(props: Props) {
  const { componentData } = props;

  const { isPending, mutate } = useMutation({
    mutationKey: ['components', componentData.id],
    mutationFn: () => api.components.remove(componentData.id),
  });

  const remove = useCallback(() => mutate(), [mutate]);

  return (
    <Button
      htmlType="button"
      icon={<DeleteOutlined />}
      loading={isPending}
      shape="circle"
      danger
      onClick={remove}
    />
  );
}
