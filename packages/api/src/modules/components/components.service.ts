import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { Component } from './component.entity';
import type { ConstructorOptions, FindOptions } from './component.entity';

@Injectable()
export class ComponentsService {
  @InjectRepository(Component)
  private readonly components!: Repository<Component>;

  /** Creates component with specified options */
  create(options: ConstructorOptions): Promise<Component> {
    return this.components.save(this.components.create(options));
  }

  /** Find components by specified options */
  findBy(options: FindOptions): Promise<Component[]> {
    return this.components.findBy(options);
  }

  /** Find one component by its id */
  findById(id: string): Promise<Component> {
    return this.components.findOneByOrFail({ id });
  }

  /** Removes component with specified id */
  async remove(id: string): Promise<Component> {
    const component = await this.findById(id);
    await this.components.delete({ id });
    return component;
  }
}
