import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { Element } from './element.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Element])],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
