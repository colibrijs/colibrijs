import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ConsturctorOptions, Component, FindOptions } from './component.entity';
import { ComponentsService } from './components.service';

@ApiTags('Components')
@Controller('components')
export class ComponentsController {
  @Inject(ComponentsService)
  private readonly componentsService!: ComponentsService;

  @ApiCreatedResponse({ type: Component })
  @ApiOperation({ operationId: 'create' })
  @Post()
  create(@Body() options: ConsturctorOptions): Promise<Component> {
    return this.componentsService.create(options);
  }

  @ApiOkResponse({ type: [Component] })
  @ApiOperation({ operationId: 'findBy' })
  @Get()
  findBy(@Query() options: FindOptions): Promise<Component[]> {
    return this.componentsService.findBy(options);
  }

  @ApiOkResponse({ type: Component })
  @ApiOperation({ operationId: 'findById' })
  @Get(':id')
  findById(@Param('id') id: string): Promise<Component> {
    return this.componentsService.findById(id);
  }

  @ApiOkResponse({ type: Component })
  @ApiOperation({ operationId: 'remove' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Component> {
    return this.componentsService.remove(id);
  }
}
