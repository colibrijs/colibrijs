import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { ComponentsModule } from './components/index.js';
import { dataSource } from '../data-source.js';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(dataSource.options), ComponentsModule],
})
export class AppModule {}
