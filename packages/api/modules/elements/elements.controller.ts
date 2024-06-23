import type { IElement } from '@colibrijs/types';
import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { ElementDTO, ElementConstructorOptions } from './element.entity';
import { ElementsServiceToken, type IElementsService } from './elements.types';

@ApiTags('elements')
@Controller('/elements')
export class ElementsController {
  constructor(
    @Inject(ElementsServiceToken)
    private readonly elementsService: IElementsService
  ) {}

  @Get()
  @ApiOkResponse({ type: [ElementDTO] })
  get(): Promise<IElement[]> {
    return this.elementsService.find();
  }

  @Post()
  @ApiBody({ type: ElementConstructorOptions })
  @ApiCreatedResponse({ type: ElementDTO })
  post(@Body() elementsData: ElementConstructorOptions): Promise<IElement> {
    return this.elementsService.create(elementsData);
  }

  @Delete(':elementId')
  @ApiOkResponse({ type: ElementDTO })
  delete(@Param('elementId') elementId: string): Promise<IElement> {
    return this.elementsService.remove(elementId);
  }
}
