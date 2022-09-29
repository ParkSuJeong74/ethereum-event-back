import { IsArray, IsDate, IsString } from 'class-validator';
import { Topic } from 'src/commons/entity';

export class CreateSubscriptionsRequestDto {
  /**
   * 구독할 이벤트의 토픽
   */
  @IsArray()
  topics: string[];
  /**
   * 이벤트를 구독할 스마트 컨트랙트의 주소
   */
  @IsString()
  contractAddress: string;
}

export class CreateSubscriptionsResponseDto {
  /**
   * 구독 id (:subscription-id)
   */
  @IsString()
  id: number;
  /**
   * 구독한 이벤트의 토픽
   */
  @IsArray()
  topics: Topic[];
  /**
   * 이벤트를 구독한 스마트 컨트랙트의 주소
   */
  @IsString()
  contractAddress: string;
  /**
   * 구독 생성일시. 서버에서는 Date 객체로 다루지만 응답은 string 으로 내려준다
   */
  @IsDate()
  createdAt: Date;
  /**
   * 구독 최종 수정일시. 서버에서는 Date 객체로 다루지만 응답은 string 으로 내려준다
   */
  @IsDate()
  updatedAt: Date;
}

class SubscriptionInfo {
  id: number;
  topics: Topic[];
  contractAddress: string;
  createdAt: Date;
  updatedAt: Date;
}
export class ListSubscriptionsResponseDto {
  subscriptions: SubscriptionInfo[];
}
