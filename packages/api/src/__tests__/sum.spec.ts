import { describe, it, expect } from '@jest/globals';

import { sum } from '../sum';

describe(sum.name, () => {
  it('returns sum of two numbers', () => {
    expect.assertions(1);
    expect(sum(2, 3)).toBe(5);
  });
});
