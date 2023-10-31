import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { Element, type ElementConstructorOptions, type FindOptions } from './element.entity';

export class ContentService {
  @InjectRepository(Element)
  private readonly content!: Repository<Element>;

  /** Creates content with specified elements */
  create(elementsData: ElementConstructorOptions[]): Promise<Element[]> {
    return this.content.save(this.content.create(elementsData));
  }

  /** Find content by specified options */
  findBy(options: FindOptions): Promise<Element[]> {
    return this.content.findBy(options);
  }

  /** Removes component with specified id */
  async remove(id: string): Promise<Element> {
    const element = await this.content.findOneByOrFail({ id });
    await this.content.delete({ id });
    return element;
  }
}
