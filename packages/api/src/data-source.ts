import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

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
  migrations: [],
  synchronize: false,
});
