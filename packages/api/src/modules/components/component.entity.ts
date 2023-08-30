import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'components' })
export class Component {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', nullable: false })
  name!: string;
}
