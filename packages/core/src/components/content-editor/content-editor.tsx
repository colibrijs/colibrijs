import { PlusOutlined } from '@ant-design/icons';
import { api } from '@colibrijs/api-client';
import type { Component, Element } from '@colibrijs/api-client';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Button, Collapse, type CollapseProps, Flex, Skeleton, Typography } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

import { ComponentsLibraryModal } from '../components-library';
import { ElementEditor, ElementExtra, type ChangePropsPayload } from '../element-editor';

export function ContentEditor() {
  const [isComponentSelecting, setIsComponentSelecting] = useState(false);
  const [content, setContent] = useState<Element[]>([]);

  const { isLoading } = useQuery({
    queryKey: ['content'],
    queryFn: () => api.content.findBy({}),
    staleTime: Infinity,
    select: setContent,
  });

  const { mutate: addNewElement } = useMutation({
    mutationKey: ['content'],
    mutationFn: (component: Component) =>
      api.content.create({
        componentId: component.id,
        props: {},
      }),
    onSuccess: (element) => setContent((currentContent) => [...currentContent, element]),
  });

  const {
    mutate: updateProps,
    isPending: propsIsUpdating,
    variables: updatePropsVariables,
  } = useMutation({
    mutationKey: ['content'],
    mutationFn: (options: ChangePropsPayload) =>
      api.content.updateProps(options.element.id, options.newProps),
    onSuccess: (element) => {
      const elementIndex = content.findIndex((item) => item.id === element.id);

      if (elementIndex === -1) {
        const message = `Unknown Error, you are try to update props of element #${element.id} that doesn't exist`;
        throw new Error(message);
      }

      const contentCopy = [...content];
      contentCopy.splice(elementIndex, 1, element);
      setContent(contentCopy);
    },
  });

  const {
    mutate: removeElement,
    isPending: elementIsRemoving,
    variables: removeElementVariables,
  } = useMutation({
    mutationKey: ['content'],
    mutationFn: (element: Element) => api.content.remove(element.id),
    onSuccess: (element) => {
      const newContent = content.filter((item) => item.id !== element.id);
      setContent(newContent);
    },
  });

  const toggleComponentSelecting = useCallback(() => {
    return setIsComponentSelecting((currentlySelecting) => !currentlySelecting);
  }, []);

  const collapseItems = useMemo((): CollapseProps['items'] => {
    return content.map((element) => ({
      key: element.id,
      label: element.component.componentName,
      extra: (
        <ElementExtra
          element={element}
          removingInProgress={elementIsRemoving && removeElementVariables.id === element.id}
          onRemove={removeElement}
        />
      ),
      children: (
        <ElementEditor
          changingInProgress={propsIsUpdating && updatePropsVariables?.element.id === element.id}
          element={element}
          onChangeProps={updateProps}
        />
      ),
    }));
  }, [
    content,
    elementIsRemoving,
    propsIsUpdating,
    updateProps,
    removeElement,
    updatePropsVariables,
    removeElementVariables,
  ]);

  return (
    <Flex gap="middle" vertical>
      <Flex align="baseline" justify="space-between">
        <Typography.Title level={5}>Content</Typography.Title>
        <Button
          htmlType="button"
          icon={<PlusOutlined />}
          size="small"
          title="Add new element"
          onClick={toggleComponentSelecting}
        />
      </Flex>
      <Collapse bordered={false} items={collapseItems} accordion />
      {isLoading ? (
        <Skeleton paragraph />
      ) : (
        <ComponentsLibraryModal
          opened={isComponentSelecting}
          onClose={toggleComponentSelecting}
          onSelect={addNewElement}
          selectable
        />
      )}
    </Flex>
  );
}
