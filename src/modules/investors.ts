import { StacksClient } from '@jadonamite/stacks-core';
import { Investor } from '../types';

export class InvestorModule {
  constructor(private client: StacksClient) {}

  async fund(campaignId: string, amount: number): Promise<string> {
    console.log(`Funding campaign ${campaignId} with ${amount} on ${this.client.network}`);
    return 'tx-pending';
  }

  async getByAddress(address: string): Promise<Investor[]> {
    return [];
  }
}
