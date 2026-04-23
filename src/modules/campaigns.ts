import { StacksClient } from '@jadonamite/stacks-core';
import { Campaign } from '../types';

export class CampaignModule {
  constructor(private client: StacksClient) {}

  async create(params: { goal: number; token: 'STX' | 'sBTC' }): Promise<string> {
    console.log(`Creating campaign on ${this.client.network} with goal ${params.goal} ${params.token}`);
    return 'tx-pending';
  }

  async getById(id: string): Promise<Campaign | null> {
    return null;
  }

  async list(): Promise<Campaign[]> {
    return [];
  }
}
