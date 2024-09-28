import { MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined } from '@ant-design/icons';
import type { IElement } from '@colibrijs/types';
import { useQuery } from '@tanstack/react-query';
import {
  Button,
  ConfigProvider,
  Drawer,
  Input,
  Tree,
  type TreeDataNode,
  Tooltip,
  theme,
} from 'antd';
import cn from 'classnames';
import { useCallback, useMemo, useState, type Key, type ChangeEvent, useEffect } from 'react';

import styles from './content-editor.module.css';
import { useApi } from '../../hooks/use-api';
import { Content } from '../content';

export interface Props {
  pageRoute: string;
}

export function ContentEditor({ pageRoute }: Props) {
  const api = useApi();

  const [content, setContent] = useState<IElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<IElement | null>(null);
  const [treeOpened, setTreeOpened] = useState(true);
  const darkTheme = useMemo(() => ({ algorithm: theme.darkAlgorithm }), []);

  const toggleTree = useCallback(() => {
    setTreeOpened((currentlyOpened) => !currentlyOpened);
  }, []);

  const { data: loadedContent } = useQuery({
    queryKey: ['content', pageRoute],
    queryFn: () => api.elements.get(pageRoute),
  });

  useEffect(() => {
    if (loadedContent) {
      setContent(loadedContent);
    }
  }, [loadedContent]);

  const treeData = useMemo(() => {
    return content.map(
      (element): TreeDataNode => ({
        key: element.id,
        title: <span data-testid={`content-editor__${element.id}`}>{element.component.name}</span>,
        children: [],
      })
    );
  }, [content]);

  const changeElementHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (!selectedElement) return;

      const elementIndex = content.indexOf(selectedElement);
      const newElement: IElement = { ...selectedElement, props: JSON.parse(event.target.value) };
      const newContent = [...content];
      newContent.splice(elementIndex, 1, newElement);

      setSelectedElement(newElement);
      setContent(newContent);
    },
    [content, selectedElement]
  );

  const selectHandler = useCallback(
    (selectedKeys: Key[]) => {
      const foundElement = content.find((element) => selectedKeys.includes(element.id));

      if (!foundElement) {
        // eslint-disable-next-line no-console -- вместо мониторинга
        console.error('А как так вышло? Пользователь выбрал несуществующий элемент');
        return;
      }

      setSelectedElement(foundElement);
    },
    [content]
  );

  return (
    <div
      className={cn(styles.container, { [styles.opened!]: treeOpened })}
      data-testid="content-editor"
    >
      <ConfigProvider theme={darkTheme}>
        <Drawer
          closable={false}
          getContainer={false}
          mask={false}
          placement="left"
          open={treeOpened}
          title="Контент"
          extra={
            <Tooltip title="Добавить элемент">
              <Button icon={<PlusOutlined />} />
            </Tooltip>
          }
        >
          <Tree treeData={treeData} showLine onSelect={selectHandler} />
        </Drawer>
        <Button
          className={cn(styles.toggler!)}
          icon={treeOpened ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          size="large"
          htmlType="button"
          onClick={toggleTree}
        />
      </ConfigProvider>
      <Content content={content} />
      <ConfigProvider theme={darkTheme}>
        <Drawer
          data-testid="element-editor-drawer"
          closable={false}
          open={Boolean(selectedElement)}
          mask={false}
          placement="right"
          title={
            <span data-testid="element-editor-drawer__title">
              {selectedElement?.component.name}
            </span>
          }
        >
          {selectedElement && (
            <Input.TextArea
              value={JSON.stringify(selectedElement.props, null, 2)}
              onChange={changeElementHandler}
              autoSize
            />
          )}
        </Drawer>
      </ConfigProvider>
    </div>
  );
}
