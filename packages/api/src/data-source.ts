import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { CreateComponents1693430005821 } from './migrations/1693430005821-create-components';
import { ComponentsBase1698262164083 } from './migrations/1698262164083-components-base';
import { CreateContent1698782728601 } from './migrations/1698782728601-create-content';
import { Component } from './modules/components';
import { Element } from './modules/content';

const config = new ConfigService();

export const dataSource = new DataSource({
  type: 'postgres',
  database: config.getOrThrow('DATABASE_NAME'),
  username: config.getOrThrow('DATABASE_USER'),
  password: config.getOrThrow('DATABASE_PASSWORD'),
  host: config.getOrThrow('DATABASE_HOST'),
  port: parseInt(config.getOrThrow('DATABASE_PORT'), 10),
  entities: [Component, Element],
  migrations: [
    CreateComponents1693430005821,
    ComponentsBase1698262164083,
    CreateContent1698782728601,
  ],
  synchronize: false,
});
