import { Controller, Get, Inject, Param } from '@nestjs/common';

import type { Component } from './component.entity.js';
import { ComponentsService } from './components.service.js';

@Controller('components')
export class ComponentsController {
  constructor(
    @Inject(ComponentsService)
    private readonly componentsService: ComponentsService
  ) {}

  @Get(':id')
  findById(@Param('id') id: string): Promise<Component | null> {
    return this.componentsService.findById(id);
  }
}
