import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Subscription, Topic } from '../commons/entity';
import { CreateSubscriptionsRequestDto } from './dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>,
    private readonly dataSource: DataSource,
  ) {
    this.subscriptionRepository = subscriptionRepository;
    this.topicRepository = topicRepository;
  }

  async createSubscription(
    createSubscriptionsRequestDto: CreateSubscriptionsRequestDto,
  ) {
    //: Promise<CreateSubscriptionsResponseDto>
    const { contractAddress, topics } = createSubscriptionsRequestDto;

    try {
      const topic_result = [];
      topics.map((topic) => {
        const topic1 = new Topic();
        topic1.topic = topic;
        topic_result.push(topic1);
      });

      const subscription = new Subscription();
      subscription.contractAddress = contractAddress;
      subscription.topics = topic_result;

      return await this.subscriptionRepository.save(subscription);
    } catch (error) {
      throw new ConflictException();
    }
  }

  async getSubscriptions() {
    //: Promise<ListSubscriptionsResponseDto>
    try {
      return await this.subscriptionRepository.find({});
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
