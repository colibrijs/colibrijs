import { act, render } from '@testing-library/react';
import React from 'react';

import { defaultProps } from './test-data';
import { Remote, Props } from '../remote';
import * as importRemoteModule from '../utils/import-remote';

const TestComponent = () => <div data-testid="test-component" />;

describe('Remote - integration importRemote', () => {
  it('renders the result of importRemote(parameters).componentName', async () => {
    // Arrange
    jest.spyOn(importRemoteModule, 'importRemote').mockResolvedValueOnce({ TestComponent });
    const props: Props = {
      ...defaultProps,
      element: {
        ...defaultProps.element,
        component: {
          ...defaultProps.element.component,
          componentName: 'TestComponent',
        },
      },
    };

    // Act
    const { getByTestId } = await act(async () => render(<Remote {...props} />));

    // Assert
    expect(getByTestId('test-component')).toBeInTheDocument();
  });
});
