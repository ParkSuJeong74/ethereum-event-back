import { Injectable } from '@nestjs/common';
import { EthersService } from 'src/ethers/ethers.service';
import { CreateSubscriptionsRequestDto } from './dto';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly ehtersService: EthersService) {
    // private readonly dataSource: DataSource, // private readonly topicRepository: Repository<Topic>, // @InjectRepository(Topic) // private readonly subscriptionRepository: Repository<Subscription>, // @InjectRepository(Subscription)
    // this.subscriptionRepository = subscriptionRepository;
    // this.topicRepository = topicRepository;
  }

  async createSubscription(
    createSubscriptionsRequestDto: CreateSubscriptionsRequestDto,
  ) {
    const { contractAddress, topics } = createSubscriptionsRequestDto;
    await this.ehtersService.addSubscription(contractAddress, topics);
    // DB에 구독 정보를 저장
  }
  async getSubscriptions() {
    // 이더리움 체인 이벤트 구독 목록을 조회한다(DB에서?)
  }
  async getSubscriptionInfo() {
    // 구독 정보를 조회한다.
  }
  async deleteSubscription() {
    // 이더리움 체인 이벤트 구독을 제거한다.
  }
  async getSubscriptionLog() {
    // 로그 조회
  }

  // async createSubscription(
  //   createSubscriptionsRequestDto: CreateSubscriptionsRequestDto,
  // ) {
  //   //: Promise<CreateSubscriptionsResponseDto>
  //   // const { contractAddress, topics } = createSubscriptionsRequestDto;
  //   // try {
  //   //   const topic_result = [];
  //   //   topics.map((topic) => {
  //   //     const topic1 = new Topic();
  //   //     topic1.topic = topic;
  //   //     topic_result.push(topic1);
  //   //   });
  //   //   const subscription = new Subscription();
  //   //   subscription.contractAddress = contractAddress;
  //   //   subscription.topics = topic_result;
  //   //   return await this.subscriptionRepository.save(subscription);
  //   // } catch (error) {
  //   //   throw new ConflictException();
  //   // }
  // }

  // async getSubscriptions() {
  //   //: Promise<ListSubscriptionsResponseDto>
  //   // try {
  //   //   return await this.subscriptionRepository.find({});
  //   // } catch (error) {
  //   //   throw new NotFoundException();
  //   // }
  // }
}
