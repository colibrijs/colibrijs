import { describe, expect, it, jest } from '@jest/globals';
import { act, render } from '@testing-library/react';
import React from 'react';

import { defaultProps } from './test-data';
import { sanitizePackageName } from '../../../utils/sanitize-package-name';
import { Remote, Props } from '../remote';
import * as importRemoteModule from '../utils/import-remote';

const TestComponent = () => <div />;

describe('Remote - integration sanitizePackageName', () => {
  it('calls importRemote with parameter "module" that is result of sanitizePackageName', async () => {
    // Arrange
    const importRemoteSpy = jest
      .spyOn(importRemoteModule, 'importRemote')
      .mockResolvedValueOnce({ TestComponent });

    const props: Props = {
      ...defaultProps,
      componentName: 'TestComponent',
      src: 'http://build-src.local/',
      packageName: '@colibrijs/example',
    };

    // Act
    await act(async () => render(<Remote {...props} />));

    // Assert
    const lastCallParameters = importRemoteSpy.mock.lastCall?.[0];
    expect(lastCallParameters).toHaveProperty('module', sanitizePackageName(props.packageName));
  });

  it('calls importRemote with parameter "scope" that is result of sanitizePackageName', async () => {
    // Arrange
    const importRemoteSpy = jest
      .spyOn(importRemoteModule, 'importRemote')
      .mockResolvedValueOnce({ TestComponent });

    const props: Props = {
      ...defaultProps,
      componentName: 'TestComponent',
      src: 'http://build-src.local/',
      packageName: '@colibrijs/example',
    };

    // Act
    await act(async () => render(<Remote {...props} />));

    // Assert
    const lastCallParameters = importRemoteSpy.mock.lastCall?.[0];
    expect(lastCallParameters).toHaveProperty('scope', sanitizePackageName(props.packageName));
  });
});
