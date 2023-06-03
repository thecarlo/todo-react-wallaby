import axios from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createApiAxiosInstance } from './createApiAxiosInstance';

describe('createApiAxiosInstance', () => {
  const env = { ...process.env };

  beforeEach(() => {
    process.env.VITE_API_BASE_URL = 'https://foo.bar.baz';
  });

  afterEach(() => {
    process.env = env;
  });

  it('should create an axios instance', () => {
    const spy = vi.spyOn(axios, 'create');

    createApiAxiosInstance();

    expect(spy).toHaveBeenCalledTimes(1);

    expect(spy).toHaveBeenCalledWith({
      baseURL: 'https://foo.bar.baz',
      timeout: 5000,
    });
  });

  it('should throw an error if VITE_API_BASE_URL is not defined', () => {
    delete process.env.VITE_API_BASE_URL;

    expect(createApiAxiosInstance).toThrow('VITE_API_BASE_URL is not defined');
  });
});
