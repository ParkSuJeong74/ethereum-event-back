import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscriptions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topics: string[];

  @Column()
  contractAddress: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
