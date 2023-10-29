import { api } from '@colibrijs/api-client';
import { useMutation } from '@tanstack/react-query';
import { Form, Input, Modal } from 'antd';
import React, { useCallback } from 'react';

import type { RemoteProps } from '../remote';

type ComponentData = Pick<RemoteProps, 'componentName' | 'packageName' | 'src'>;

export interface Props {
  opened?: boolean;
  onClose: () => void;
}

export function ComponentEditor(props: Props) {
  const { opened, onClose } = props;
  const [form] = Form.useForm();

  const { isPending, mutate } = useMutation({
    mutationKey: ['components'],
    mutationFn: (options: ComponentData) => api.components.create(options),
    onSuccess: () => onClose(),
  });

  const onCreate = useCallback(() => {
    form.validateFields().then((componentData) => mutate(componentData));
  }, [form, mutate]);

  return (
    <Modal
      cancelText="Cancel"
      confirmLoading={isPending}
      okText="Create"
      open={opened}
      title="Add remote component"
      onCancel={onClose}
      onOk={onCreate}
    >
      <Form form={form} layout="vertical" name="component-editor" onFinish={mutate}>
        <Form.Item label="Source" name="src" required>
          <Input type="url" />
        </Form.Item>
        <Form.Item label="Package name" name="packageName" required>
          <Input />
        </Form.Item>
        <Form.Item label="Component name" name="componentName" required>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
