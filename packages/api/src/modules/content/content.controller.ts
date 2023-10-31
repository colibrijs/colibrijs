import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ContentService } from './content.service';
import { ConstructorOptions, Element, FindOptions } from './element.entity';

@ApiTags('content')
@Controller('content')
export class ContentController {
  @Inject(ContentService)
  private readonly contentService!: ContentService;

  @ApiCreatedResponse({ type: [Element] })
  @Post()
  create(@Body() options: ConstructorOptions[]): Promise<Element[]> {
    return this.contentService.create(options);
  }

  @ApiOkResponse({ type: [Element] })
  @Get()
  findBy(@Query() options: FindOptions): Promise<Element[]> {
    return this.contentService.findBy(options);
  }

  @ApiOkResponse({ type: Element })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Element> {
    return this.contentService.remove(id);
  }
}
