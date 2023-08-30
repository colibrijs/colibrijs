import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Component } from './component.entity.js';
import { ComponentsService } from './components.service.js';

@ApiTags('Components')
@Controller('components')
export class ComponentsController {
  constructor(
    @Inject(ComponentsService)
    private readonly componentsService: ComponentsService
  ) {}

  @ApiOkResponse({ type: Component })
  @Get(':id')
  findById(@Param('id') id: string): Promise<Component | null> {
    return this.componentsService.findById(id);
  }
}
