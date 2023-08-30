import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { Component } from './modules/components/component.entity.js';

const configSerive = new ConfigService();

export const dataSource = new DataSource({
  type: 'postgres',
  database: configSerive.getOrThrow('DATABASE_NAME'),
  username: configSerive.getOrThrow('DATABASE_USER'),
  password: configSerive.getOrThrow('DATABASE_PASSWORD'),
  host: configSerive.getOrThrow('DATABASE_HOST'),
  port: parseInt(configSerive.getOrThrow('DATABASE_PORT'), 10),
  entities: [Component],
  migrations: [],
  synchronize: false,
});
