import { InjectRepository } from '@nestjs/typeorm';
import { In, type Repository } from 'typeorm';

import { Element, type ElementConstructorOptions, type FindOptions } from './element.entity';

export class ContentService {
  @InjectRepository(Element)
  private readonly content!: Repository<Element>;

  /** Creates content with specified elements */
  async create(elementsData: ElementConstructorOptions[]): Promise<Element[]> {
    const elementsRaw = elementsData.map((elementData) =>
      this.content.create({
        ...elementData,
        component: { id: elementData.componentId },
      })
    );

    const { identifiers } = await this.content.insert(elementsRaw);

    return this.content.find({
      where: {
        id: In(identifiers.map((identifier) => identifier.id)),
      },
    });
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
