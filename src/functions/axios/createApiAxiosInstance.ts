import axios, { AxiosInstance } from 'axios';

export const createApiAxiosInstance = (): AxiosInstance => {
  // const baseUrl = process.env.VITE_API_BASE_URL;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!baseUrl) {
    throw new Error('VITE_API_BASE_URL is not defined');
  }

  return axios.create({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    baseURL: baseUrl,
    timeout: 5000,
  });
};
