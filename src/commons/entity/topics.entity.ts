import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Subscription } from './subscriptions.entity';

@Entity()
@Unique(['id'])
export class Topic extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topic: string;

  @ManyToOne(() => Subscription, (subscription) => subscription.topics, {
    cascade: true,
  })
  subscription: Subscription;
}
