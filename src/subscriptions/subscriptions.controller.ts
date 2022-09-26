import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateSubscriptionsRequestDto,
  CreateSubscriptionsResponseDto,
} from './dto';
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
    type: CreateSubscriptionsResponseDto,
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
  async createUser(
    @Body() createSubscriptionsRequestDto: CreateSubscriptionsRequestDto,
  ): Promise<CreateSubscriptionsResponseDto> {
    return await this.subscriptionsService.createSubscriptions(
      createSubscriptionsRequestDto,
    );
  }
}
