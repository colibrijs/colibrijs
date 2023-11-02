import type { Component } from '@colibrijs/api-client';
import { Modal } from 'antd';
import React, { useCallback } from 'react';

import { ComponentsLibrary, Props as BaseProps } from './components-library';

export interface Props extends BaseProps {
  opened: boolean;
  onClose: () => void;
}

export function ComponentsLibraryModal(props: Props) {
  const { opened, onClose, onSelect, ...baseProps } = props;

  const selectHandler = useCallback(
    (component: Component) => {
      if (onSelect) onSelect(component);
      onClose();
    },
    [onClose, onSelect]
  );

  return (
    <Modal footer={null} title="Select component" width={1120} open={opened} onCancel={onClose}>
      <ComponentsLibrary {...baseProps} onSelect={selectHandler} />
    </Modal>
  );
}
