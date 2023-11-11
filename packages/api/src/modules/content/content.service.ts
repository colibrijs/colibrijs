import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { Element, type ElementConstructorOptions, type FindOptions } from './element.entity';

export class ContentService {
  @InjectRepository(Element)
  private readonly content!: Repository<Element>;

  /** Creates content with specified elements */
  async create(elementData: ElementConstructorOptions): Promise<Element> {
    const elementRaw = this.content.create({
      ...elementData,
      component: { id: elementData.componentId },
    });

    const { identifiers } = await this.content.insert(elementRaw);

    return this.content.findOneByOrFail({ id: identifiers[0].id });
  }

  /** Update element's props */
  async updateProps(id: string, newProps: object): Promise<Element> {
    await this.content.update(id, { props: newProps });
    return this.content.findOneByOrFail({ id });
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
