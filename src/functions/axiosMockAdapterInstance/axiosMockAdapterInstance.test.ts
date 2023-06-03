import AxiosMockAdapter from 'axios-mock-adapter';
import { describe, expect, it } from 'vitest';

import { axiosMockAdapterInstance } from './index';

describe('axiosMockAdapterInstance', () => {
  it('should be an instance of AxiosMockAdapter', () => {
    expect(axiosMockAdapterInstance).toBeInstanceOf(AxiosMockAdapter);
  });
});
