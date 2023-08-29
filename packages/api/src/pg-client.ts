import pg, { type ClientConfig } from 'pg';

const config: ClientConfig = {
  user: process.env.DATABASE_USER ?? 'user',
  password: process.env.DATABASE_PASSWORD ?? 'password',
  host: process.env.DATABASE_HOST ?? '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
  database: process.env.DATABASE_NAME ?? 'colibrijs',
};

export const client = new pg.Client(config);
