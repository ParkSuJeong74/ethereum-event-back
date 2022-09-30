import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';

@Injectable()
export class EthersService {
  private provider;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get('API_KEY');
    this.provider = ethers.getDefaultProvider(
      `wss://mainnet.infura.io/ws/v3/${apiKey}`,
    );
  }

  async addSubscription(address: string, topics: string[]) {
    const contract = new ethers.Contract(address, [], this.provider);
  }
}
