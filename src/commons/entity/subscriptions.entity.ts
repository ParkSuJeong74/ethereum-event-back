import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Topic } from '.';

@Entity()
@Unique(['id'])
export class Subscription {
  constructor(contractAddress?: string) {
    this.contractAddress = contractAddress;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractAddress: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Topic, (topic) => topic.subscription)
  topics?: Topic[];
}
