import { Components } from '../generated/Components';
import type { ApiConfig } from '../generated/http-client';

const config: ApiConfig = {
  baseUrl: process.env.API_BASE_URL ?? 'http://api.colibrijs.io',
  baseApiParams: {
    format: 'json',
  },
};

export const api = {
  components: new Components(config),
};
