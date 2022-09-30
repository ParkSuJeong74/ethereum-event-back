import { Body, Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateSubscriptionsRequestDto } from './dto';
import { SubscriptionsService } from './subscriptions.service';

@ApiTags('구독 관리 API')
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @HttpCode(201)
  @Post()
  @ApiOperation({
    summary: '구독 추가 API',
  })
  @ApiResponse({
    status: 201,
    description: '구독 성공',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: '요청의 Header 나 Body 가 잘못된 경우',
  })
  @ApiConflictResponse({
    status: 409,
    description: '서버에 이미 존재하는 구독인 경우',
  })
  @ApiBody({ type: CreateSubscriptionsRequestDto })
  async createSubscription(
    @Body() createSubscriptionsRequestDto: CreateSubscriptionsRequestDto,
  ) {
    return await this.subscriptionsService.createSubscription(
      createSubscriptionsRequestDto,
    );
  }

  @HttpCode(200)
  @Get()
  @ApiOperation({
    summary: '구독 목록 조회 API',
  })
  @ApiResponse({
    status: 200,
    description: '구독 목록 조회 성공',
  })
  async getSubscriptions() {
    return await this.subscriptionsService.getSubscriptions();
  }

  @HttpCode(200)
  @Get(':subscription-id')
  @ApiOperation({
    summary: '구독 정보 조회 API',
  })
  @ApiResponse({
    status: 200,
    description: '구독 정보 조회 성공',
  })
  async getSubscriptionInfo() {
    return await this.subscriptionsService.getSubscriptionInfo();
  }

  @HttpCode(200)
  @Delete(':subscription-id')
  @ApiOperation({
    summary: '구독 삭제 조회 API',
  })
  @ApiResponse({
    status: 200,
    description: '구독 삭제 조회 성공',
  })
  async deleteSubscription() {
    return await this.subscriptionsService.deleteSubscription();
  }

  @HttpCode(200)
  @Get(':subscription-id')
  @ApiOperation({
    summary: '구독에서 발생한 로그 조회 API',
  })
  @ApiResponse({
    status: 200,
    description: '구독에서 발생한 로그 조회 성공',
  })
  async getSubscriptionLog() {
    return await this.subscriptionsService.getSubscriptionLog();
  }
}
