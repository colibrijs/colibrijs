import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'components' })
export class Component {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ type: 'string', required: true })
  id!: string;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: 'string', required: true })
  name!: string;
}
