import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { useState, useCallback } from 'react';

import { schema } from './schema';
import { SidebarDecorator } from '../../layout/sidebar-decorator';
import { PropsEditor, type Props } from '../props-editor';

export type PropsEditorMeta = Meta<typeof PropsEditor<object>>;
export type Story = StoryObj<typeof PropsEditor<object>>;

export default {
  component: Default,
  title: 'PropsEditor',
  args: {
    onChange: fn(),
    schema,
    value: {
      name: 'Kekich',
      age: 228,
      isBald: true,
    },
  },
  decorators: [SidebarDecorator],
} satisfies PropsEditorMeta;

export function Default<T extends object>({ value, schema, onChange }: Props<T>) {
  const [currentValue, setCurrentValue] = useState(value);
  const changeHandler = useCallback(
    (newValue: T) => {
      onChange(newValue);
      setCurrentValue(newValue);
    },
    [onChange]
  );

  return <PropsEditor value={currentValue} schema={schema} onChange={changeHandler} />;
}
