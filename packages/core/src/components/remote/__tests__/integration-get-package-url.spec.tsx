import { describe, expect, it, jest } from '@jest/globals';
import * as mfUtilities from '@module-federation/utilities';
import { act, render } from '@testing-library/react';
import React from 'react';

import { defaultProps } from './test-data';
import { Remote, Props } from '../remote';
import { getPackageUrl } from '../utils/get-package-url';

const TestComponent = () => <div />;

describe('Remote - integration getPackageUrl', () => {
  it('calls importRemote with parameter url that is result of getPackageUrl', async () => {
    // Arrange
    const importRemoteSpy = jest
      .spyOn(mfUtilities, 'importRemote')
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
    expect(lastCallParameters).toHaveProperty('url', getPackageUrl(props.src, props.packageName));
  });
});
