import { exampleElement, textElement } from '@colibrijs/mocks/elements';
import { expect, fn, screen, fireEvent } from '@storybook/test';

import ElementAddStoriesMeta from './element-editor.stories';
import type { ElementEditorMeta, ElementEditorStory } from './element-editor.stories';
import { ElementRemoveTO } from '../../element-remove/test-object';
import { PropsEditorTO } from '../../props-editor/test-object';
import { ElementEditorTO } from '../test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementEditor/tests/Props',
} satisfies ElementEditorMeta;

export const OpenProp: ElementEditorStory = {
  name: 'При передаче open пропса, модалка открыта',
  args: { open: true },
  play: async ({ canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });

    expect(await elementEditor.isOpened(), 'Проверяю, что модалка открыта').toBe(true);
  },
};

export const OnCloseProp: ElementEditorStory = {
  name: 'При клике на крестик, вызывается onClose пропс',
  args: { open: true, onClose: fn() },
  play: async ({ args, canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });
    await elementEditor.clickClose();

    expect(args.onClose).toHaveBeenCalled();
  },
};

export const ElementProps: ElementEditorStory = {
  name: 'Значения пропсов элемента выводятся в пропс-эдиторе',
  args: { element: textElement },
  play: async ({ args, canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });
    await elementEditor.waitForPropsEditor();
    const propsEditor = new PropsEditorTO({ canvasElement: document.body, step }, 'props-editor');

    expect(
      propsEditor.getValue('text'),
      'Проверяю, что значение редактора равно значению элемента в пропсе'
      // @ts-expect-error -- не верит что поле text есть в props
    ).toBe(args.element.props.text);
  },
};

export const OnEditProp: ElementEditorStory = {
  name: 'При изменении в textarea, вызывается onEdit пропс с передачей измененного объекта',
  args: { element: exampleElement, onEdit: fn() },
  play: async ({ args }) => {
    const textarea: HTMLTextAreaElement = await screen.findByTestId('element-editor__textarea');
    fireEvent.input(textarea, { target: { value: '{\n "title": "Заголовок1"\n}' } });

    expect(args.onEdit).toHaveBeenCalledWith({ title: 'Заголовок1' });
  },
};

export const OnRemoveProp: ElementEditorStory = {
  name: 'Клик на мусорку в положительном исходе вызывает onRemove пропс',
  args: { onRemove: fn() },
  play: async ({ args, step }) => {
    const modal = await screen.findByTestId('element-editor');
    const elementRemove = new ElementRemoveTO({ canvasElement: modal, step });
    await elementRemove.clickRemove();
    await elementRemove.confirm();

    expect(args.onRemove).toHaveBeenCalled();
  },
};
