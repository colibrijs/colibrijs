import { PlusOutlined } from '@ant-design/icons';
import { api, type Component, type Element } from '@colibrijs/api-client';
import { useQuery } from '@tanstack/react-query';
import { Button, Collapse, type CollapseProps, Flex, Skeleton, Typography } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

import { ComponentsLibraryModal } from '../components-library';
import { ElementEditor, ElementExtra } from '../element-editor';

export function ContentEditor() {
  const [isComponentSelecting, setIsComponentSelecting] = useState(false);
  const [content, setContent] = useState<Element[]>([]);

  const toggleComponentSelecting = useCallback(() => {
    return setIsComponentSelecting((currentlySelecting) => !currentlySelecting);
  }, []);

  const addNewElement = useCallback((component: Component) => {
    const element: Element = {
      id: 'my-temporary-id',
      component,
      props: {},
    };

    setContent((currentContent) => [...currentContent, element]);
  }, []);

  const getChangePropsHandler = useCallback(<T extends object>(element: Element<T>) => {
    return (newProps: T) => {
      // eslint-disable-next-line no-console -- implementation will be later
      console.log(element, newProps);
    };
  }, []);

  const getRemoveHandler = useCallback((element: Element) => {
    return () => {
      // eslint-disable-next-line no-console -- implementation will be later
      console.log(element);
    };
  }, []);

  const collapseItems = useMemo((): CollapseProps['items'] => {
    return content.map((element) => ({
      key: element.id,
      label: element.component.componentName,
      extra: <ElementExtra removingInProgress={false} onRemove={getRemoveHandler(element)} />,
      children: (
        <ElementEditor
          changingInProgress={false}
          element={element}
          onChangeProps={getChangePropsHandler(element)}
        />
      ),
    }));
  }, [content, getChangePropsHandler, getRemoveHandler]);

  const { isLoading } = useQuery({
    queryKey: ['content'],
    queryFn: () => api.content.findBy({}),
    staleTime: Infinity,
    select: setContent,
  });

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
      <Button disabled={isLoading} htmlType="button" type="primary">
        Save
      </Button>
    </Flex>
  );
}
