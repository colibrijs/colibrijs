import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { Component } from './component.entity';

@Injectable()
export class ComponentsService {
  constructor(
    @InjectRepository(Component)
    private readonly components: Repository<Component>
  ) {}

  async findById(id: string): Promise<Component | null> {
    return this.components.findOneBy({ id });
  }
}
