import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComponentsModule } from './components/index.js';
import { dataSource } from '../data-source.js';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource.options), ComponentsModule],
})
export class AppModule {}
