import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { ComponentsModule } from './components';
import { ContentModule } from './content';
import { dataSource } from '../data-source';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(dataSource.options),
    ComponentsModule,
    ContentModule,
  ],
})
export class AppModule {}
