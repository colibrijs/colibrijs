import { describe, expect, it, jest } from '@jest/globals';
import { act, render } from '@testing-library/react';
import React from 'react';

import { defaultProps } from './test-data';
import { Remote, Props } from '../remote';
import { getPackageUrl } from '../utils/get-package-url';
import * as importRemoteModule from '../utils/import-remote';

const TestComponent = () => <div />;

describe('Remote - integration getPackageUrl', () => {
  it('calls importRemote with parameter url that is result of getPackageUrl', async () => {
    // Arrange
    const importRemoteSpy = jest
      .spyOn(importRemoteModule, 'importRemote')
      .mockResolvedValueOnce({ TestComponent });

    const props: Props = {
      ...defaultProps,
      element: {
        ...defaultProps.element,
        component: {
          ...defaultProps.element.component,
          componentName: 'TestComponent',
          src: 'http://build-src.local/',
          packageName: '@colibrijs/example',
        },
      },
    };

    // Act
    await act(async () => render(<Remote {...props} />));

    // Assert
    const lastCallParameters = importRemoteSpy.mock.lastCall?.[0];
    expect(lastCallParameters).toHaveProperty(
      'url',
      getPackageUrl(props.element.component.src, props.element.component.packageName)
    );
  });
});
