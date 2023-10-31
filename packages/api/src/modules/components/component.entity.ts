import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'components' })
export class Component {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ type: 'string', required: true })
  id!: string;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: 'string', required: true })
  componentName!: string;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: 'string', required: true })
  packageName!: string;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: 'string', required: true })
  src!: string;
}

export class FindOptions extends PartialType(Component) {}

export class ConstructorOptions extends OmitType(Component, ['id']) {}
