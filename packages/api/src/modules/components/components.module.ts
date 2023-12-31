import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Component } from './component.entity';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';

@Module({
  imports: [TypeOrmModule.forFeature([Component])],
  controllers: [ComponentsController],
  providers: [ComponentsService],
})
export class ComponentsModule {}
