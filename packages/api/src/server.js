import http from 'node:http';
import ip from 'ip';
import pg from 'pg';

const client = new pg.Client({
  user: process.env.DATABASE_USER ?? 'user',
  password: process.env.DATABASE_PASSWORD ?? 'password',
  host: process.env.DATABASE_HOST ?? '127.0.0.1',
  port: process.env.DATABASE_PORT ?? 5432,
  database: process.env.DATABASE_NAME ?? 'colibrijs',
});

client.connect()
  .then(() => http
    .createServer((_, res) => res.end(`My ip address is ${ip.address()}`, 'utf-8'))
    .listen(3000, () => console.log('Server is running on the port 3000'))
  );
