import { type JsonSchema, getPropertiesNames } from '@colibrijs/schema';
import { Form, Input } from 'antd';
import { useCallback, type ChangeEvent } from 'react';

export interface Props<T extends Record<string, string>> {
  /** JSON схема, которая описывает каким должен быть объект */
  schema: JsonSchema<T>;

  /** Объект со значением по умолчанию */
  value: T;

  /** Функция, которая будет вызвана, когда пропсы поменяются */
  onChange: (value: T) => void;
}

export function PropsEditor<T extends Record<string, string>>({
  schema,
  onChange,
  value,
}: Props<T>) {
  const propertiesNames = getPropertiesNames(schema);

  const getChangeHandler = useCallback(
    <K extends keyof T>(key: K) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange({ ...value, [key]: newValue });
      },
    [onChange, value]
  );

  return (
    <Form layout="vertical">
      {propertiesNames.map((propName) => (
        <Form.Item
          key={propName}
          label={<span data-testid="props-editor__label">{propName}</span>}
          data-testid="props-editor__item"
        >
          <Input
            value={value[propName]}
            data-testid="props-editor__input"
            onChange={getChangeHandler(propName)}
          />
        </Form.Item>
      ))}
    </Form>
  );
}
