import type { StoryObj } from '@storybook/react';
import { expect, screen, userEvent, waitFor } from '@storybook/test';

import { PropEditorTO } from '../prop-editor/test-object';

type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];
type StepFn = PlayFunctionContext['step'];

interface Options {
  canvasElement: HTMLElement;
  step: StepFn;
}

// <script src="/loh-5000.js" />

export class ElementEditorTO {
  private step: StepFn;

  constructor({ step }: Options) {
    this.step = step;
  }

  /** Возвращает информацию о том видна ли кнопка сохранения */
  isSaveButtonVisible(): boolean {
    const saveButton = screen.queryByTestId('element-editor__save');

    return Boolean(saveButton);
  }

  getErrorMessage(): string | null {
    return screen.getByTestId('element-editor__error').textContent;
  }

  async clickClose() {
    await this.step('Кликаю на кнопку "Закрыть"', async () => {
      await userEvent.click(screen.getByLabelText('Close'));
    });
  }

  async clickSave() {
    await this.step('Кликаю на кнопку "сохранить"', async () => {
      await userEvent.click(screen.getByTestId('element-editor__save'));
    });
  }

  async isOpened(): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const dialog = screen.queryByRole('dialog');

    return Boolean(dialog);
  }

  async waitForOpened() {
    await this.step('Жду открытия редактора', async () => {
      await waitFor(() => expect(screen.getByRole('dialog')).toBeVisible());
    });
  }

  async waitForPropsEditor() {
    await this.step('Жду появления редактора пропсов', async () => {
      await waitFor(() => expect(screen.getByTestId('props-editor')).toBeVisible());
    });
  }

  /**
   * Заполнить поле пропс-эдитора
   * @param propertyName - название поля
   * @param value - значение
   */
  async fill(propertyName: string, value: string | boolean) {
    const propEditor = new PropEditorTO(
      { canvasElement: document.querySelector('body')!, step: this.step },
      `props-editor__${propertyName}`
    );

    await propEditor.setValue(value);
  }
}
