import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ConstructorOptions, Component, FindOptions } from './component.entity';
import { ComponentsService } from './components.service';

@ApiTags('components')
@Controller('components')
export class ComponentsController {
  @Inject(ComponentsService)
  private readonly componentsService!: ComponentsService;

  @ApiCreatedResponse({ type: Component })
  @Post()
  create(@Body() options: ConstructorOptions): Promise<Component> {
    return this.componentsService.create(options);
  }

  @ApiOkResponse({ type: [Component] })
  @Get()
  findBy(@Query() options: FindOptions): Promise<Component[]> {
    return this.componentsService.findBy(options);
  }

  @ApiOkResponse({ type: Component })
  @Get(':id')
  findById(@Param('id') id: string): Promise<Component> {
    return this.componentsService.findById(id);
  }

  @ApiOkResponse({ type: Component })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Component> {
    return this.componentsService.remove(id);
  }
}
