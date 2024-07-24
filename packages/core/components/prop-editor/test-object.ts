import { userEvent, within, type queries } from '@storybook/test';

type ComponentElement = ReturnType<typeof within<typeof queries>>;

export class PropEditorTO {
  private editorElement: HTMLElement;
  private component: ComponentElement;
  private testId: string;

  constructor(canvasElement: HTMLElement, testId: string) {
    this.editorElement = within(canvasElement).getByTestId(testId);
    this.component = within(this.editorElement);
    this.testId = testId;
  }

  async nextTick(): Promise<null> {
    return await new Promise((resolve) => resolve(null));
  }

  getPropertyName() {
    return this.component.getByTestId(`${this.testId}__label`);
  }

  getPropertyDescription() {
    return this.component.getByTestId('prop-editor__description');
  }

  getInput(): HTMLInputElement {
    return this.component.getByTestId('prop-editor__input');
  }

  getSwitcher() {
    return this.component.getByTestId('prop-editor__switcher');
  }

  async toggleSwitcher() {
    const switcher = this.getSwitcher();
    await userEvent.click(switcher);
  }

  getValue() {
    const { type } = this.editorElement.dataset;

    if (type === 'boolean') {
      return this.getSwitcher().ariaChecked === 'true';
    } else {
      return this.getInput().value;
    }
  }

  async setValue(value: string | boolean) {
    const { type } = this.editorElement.dataset;

    if (type === 'boolean') {
      const switcher = this.getSwitcher();
      if (value === true && switcher.ariaChecked === 'false') {
        await userEvent.click(switcher);
      }
      if (value === false && switcher.ariaChecked === 'true') {
        await userEvent.click(switcher);
      }
    } else {
      const input = this.getInput();
      await userEvent.type(input, value as string);
    }
  }
}
