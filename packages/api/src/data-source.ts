import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { CreateComponents1693430005821 } from './migrations/1693430005821-create-components';
import { ComponentsBase1698262164083 } from './migrations/1698262164083-components-base';
import { Component } from './modules/components/component.entity';

const config = new ConfigService();

export const dataSource = new DataSource({
  type: 'postgres',
  database: config.getOrThrow('DATABASE_NAME'),
  username: config.getOrThrow('DATABASE_USER'),
  password: config.getOrThrow('DATABASE_PASSWORD'),
  host: config.getOrThrow('DATABASE_HOST'),
  port: parseInt(config.getOrThrow('DATABASE_PORT'), 10),
  entities: [Component],
  migrations: [CreateComponents1693430005821, ComponentsBase1698262164083],
  synchronize: false,
});
