import ip from 'ip';
import http from 'node:http';

import { client } from './pg-client.ts';

client
  .connect()
  .then(() =>
    http
      .createServer((_, res) => res.end(`My ip address is ${ip.address()}`, 'utf-8'))
      .listen(3000, () => console.log('Server is running on the port 3000'))
  );
