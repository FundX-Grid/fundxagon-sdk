import { StacksClient } from '@jadonamite/stacks-core';
import { FundXConfig } from './types';
import { CampaignModule } from './modules/campaigns';
import { InvestorModule } from './modules/investors';

export class FundXClient {
  public readonly campaigns: CampaignModule;
  public readonly investors: InvestorModule;
  private core: StacksClient;

  constructor(config: FundXConfig) {
    this.core = new StacksClient({ network: config.network });
    this.campaigns = new CampaignModule(this.core);
    this.investors = new InvestorModule(this.core);
  }
}
