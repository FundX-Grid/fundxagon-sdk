import { NetworkType } from '@jadonamite/stacks-core';

export interface FundXConfig {
  network: NetworkType;
  contractAddress?: string;
}

export interface Campaign {
  id: string;
  creator: string;
  goal: number;
  raised: number;
  token: 'STX' | 'sBTC';
  active: boolean;
}

export interface Investor {
  address: string;
  amount: number;
  campaignId: string;
}
