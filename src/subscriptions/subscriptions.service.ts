import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription, Topic } from '../commons/entity';
import {
  CreateSubscriptionsRequestDto,
  CreateSubscriptionsResponseDto,
} from './dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionsRepository: Repository<Subscription>,
    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>,
  ) {}

  async createSubscriptions(
    createSubscriptionsRequestDto: CreateSubscriptionsRequestDto,
  ): Promise<CreateSubscriptionsResponseDto> {
    const { topics, contractAddress } = createSubscriptionsRequestDto;

    try {
      return await this.subscriptionsRepository.save({
        contractAddress,
        topics,
      });
    } catch (error) {
      throw new ConflictException();
    }
  }
}
