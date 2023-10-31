import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Component } from '../components';

@Entity({ name: 'content' })
export class Element {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ type: String, required: true })
  id!: string;

  @OneToOne(() => Component, { eager: true, nullable: false })
  @JoinColumn()
  @ApiProperty({ type: () => Component, required: true })
  component!: Component;

  @Column({ type: 'simple-json' })
  @ApiProperty({ type: Object, required: true })
  props!: object;
}

export class ElementConstructorOptions extends OmitType(Element, ['id', 'component']) {
  @ApiProperty({ type: String, required: true })
  componentId!: string;
}

export class FindOptions extends OmitType(PartialType(Element), ['component']) {}
