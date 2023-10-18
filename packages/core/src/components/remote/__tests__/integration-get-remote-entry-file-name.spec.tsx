import { describe, expect, it, jest } from '@jest/globals';
import { act, render } from '@testing-library/react';
import React from 'react';

import { defaultProps } from './test-data';
import { Remote, Props } from '../remote';
import { getRemoteEntryFileName } from '../utils/get-remote-entry-file-name';
import * as importRemoteModule from '../utils/import-remote';

const TestComponent = () => <div />;

describe('Remote - integration getRemoteEntryFileName', () => {
  it('calls importRemote with parameter "remoteEntryFileName" that is result of getRemoteEntryFileName', async () => {
    // Arrange
    const importRemoteSpy = jest
      .spyOn(importRemoteModule, 'importRemote')
      .mockResolvedValueOnce({ TestComponent });
    const props: Props = { ...defaultProps, componentName: 'TestComponent', ssr: true };

    // Act
    await act(async () => render(<Remote {...props} />));

    // Assert
    const lastCallParameters = importRemoteSpy.mock.lastCall?.[0];
    expect(lastCallParameters).toHaveProperty(
      'remoteEntryFileName',
      getRemoteEntryFileName(props.ssr)
    );
  });
});
