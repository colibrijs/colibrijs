import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Component } from '../components';

@Entity({ name: 'content' })
export class Element {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ type: 'string', required: true })
  id!: string;

  @OneToOne(() => Component)
  @JoinColumn()
  @ApiProperty({ type: () => Component, required: true })
  component!: Component;

  @Column({ type: 'simple-json' })
  @ApiProperty({ type: 'object', required: true })
  props!: object;
}

export class ConstructorOptions extends OmitType(Element, ['id', 'component']) {
  @ApiProperty({ type: 'string, required: true' })
  componentId!: string;
}

export class FindOptions extends OmitType(PartialType(Element), ['component']) {}
