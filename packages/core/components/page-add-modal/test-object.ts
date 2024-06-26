import { expect, screen, type queries, within, waitFor } from '@storybook/test';

type StepImplementation = () => void | Promise<void>;
type StepFn = (text: string, fn: StepImplementation) => void | Promise<void>;
type TestElement = ReturnType<typeof within<typeof queries>>;

interface Options {
  step: StepFn;
  /** @default 'page-add' */
  testId?: string;
}

export class PageAddModalTO {
  private readonly step: StepFn;
  private readonly testId: string;
  private root: null | TestElement = null;

  constructor(options: Options) {
    this.step = options.step;
    this.testId = options.testId ?? 'page-add-modal';
  }

  private async getRoot(): Promise<TestElement> {
    if (this.root) return Promise.resolve(this.root);

    const modal = await screen.findByTestId(this.testId);

    return within(modal);
  }

  async waitForContent(): Promise<HTMLElement> {
    const root = await this.getRoot();

    await this.step('Жду появления контента модального окна', async () => {
      await waitFor(() => expect(root.getByTestId('page-add-modal__content')).toBeVisible());
    });

    return root.getByTestId('page-add-modal__content');
  }
}
