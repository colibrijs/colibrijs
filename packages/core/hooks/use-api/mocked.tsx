import { MockedApiClient } from '@colibrijs/api-client/mocked';
import type { Decorator, StoryContext } from '@storybook/react';
import type { ComponentType } from 'react';

import { ApiContext } from './use-api';

export type WithMockedApi<P> = ComponentType<P & { apiClient: MockedApiClient }>;

type PrepareApiClient = (apiClient: MockedApiClient) => void;

export function withMockedApi(prepare: PrepareApiClient = () => {}): Decorator {
  const mockedApiClient = new MockedApiClient();
  prepare(mockedApiClient);

  function MockedApiDecorator(Story: ComponentType, context: StoryContext) {
    // eslint-disable-next-line react/destructuring-assignment -- нужно добавить значение в args
    context.args.apiClient = mockedApiClient;

    return (
      <ApiContext.Provider value={mockedApiClient}>
        <Story />
      </ApiContext.Provider>
    );
  }

  MockedApiDecorator.displayName = 'MockedApiDecorator';

  return MockedApiDecorator;
}
