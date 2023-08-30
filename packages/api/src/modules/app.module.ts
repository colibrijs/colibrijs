import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ComponentsModule } from './components/index.js';
import { dataSource } from '../data-source.js';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource.options), ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
