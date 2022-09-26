import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subscription } from './subscriptions.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topic: string;

  @ManyToOne(() => Subscription, (subscription) => subscription.topic)
  @JoinColumn()
  subscription: Subscription;
}
