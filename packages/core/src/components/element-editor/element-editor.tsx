import { CheckOutlined } from '@ant-design/icons';
import type { Element } from '@colibrijs/api-client';
import { Button, Input } from 'antd';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type PropsWithChildren,
} from 'react';

import { styles } from './element-editor.styles';

export interface ChangePropsPayload<T extends object = object> {
  element: Element;
  newProps: T;
}

export type Props<T extends object> = PropsWithChildren<{
  element: Element<T>;
  changingInProgress: boolean;
  onChangeProps: (payload: ChangePropsPayload<T>) => void;
}>;

export function ElementEditor<T extends object>(props: Props<T>) {
  const { changingInProgress, element, onChangeProps } = props;

  const stringifyProps = useCallback(
    (elementProps: T) => JSON.stringify(elementProps, null, 2),
    []
  );

  const defaultValue = useMemo(
    () => stringifyProps(element.props),
    [element.props, stringifyProps]
  );

  const [strngifiedProps, setStringifiedProps] = useState(defaultValue);
  const [touched, setTouched] = useState(false);

  const changeStringifiedPropsHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setStringifiedProps(event.target.value);
      setTouched(event.target.value !== defaultValue);
    },
    [defaultValue]
  );

  const savePropsHandler = useCallback(() => {
    const newProps = JSON.parse(strngifiedProps) as T;
    onChangeProps({ element, newProps });
  }, [element, strngifiedProps, onChangeProps]);

  useEffect(
    () => setStringifiedProps(stringifyProps(element.props)),
    [element.props, stringifyProps]
  );

  return (
    <div style={styles.editor}>
      {touched && (
        <div style={styles.actions}>
          <Button
            disabled={!touched}
            htmlType="button"
            icon={<CheckOutlined />}
            loading={changingInProgress}
            size="small"
            type="text"
            onClick={savePropsHandler}
          />
        </div>
      )}
      <Input.TextArea value={strngifiedProps} onChange={changeStringifiedPropsHandler} />
    </div>
  );
}
