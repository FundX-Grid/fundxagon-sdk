# @fundxagon/sdk

[![npm downloads](https://img.shields.io/npm/dm/@jadonamite/fundxagon-sdk)](https://www.npmjs.com/package/@jadonamite/fundxagon-sdk)
[![npm version](https://img.shields.io/npm/v/@jadonamite/fundxagon-sdk.svg)](https://www.npmjs.com/package/@jadonamite/fundxagon-sdk)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)

> Production-ready TypeScript SDK for FundX — decentralized fundraising powered by the Stacks blockchain.

## 📦 Installation

This SDK requires the `@fundxgrid/stacks-core` utility package.

```bash
npm install @jadonamite/fundxagon-sdk @jadonamite/stacks-core
```

## 🚀 Quick Start

Initialize the client with your desired network configuration to begin interacting with FundX smart contracts.

```typescript
import { FundXClient } from '@jadonamite/fundxagon-sdk';

// Initialize the client on testnet
const client = new FundXClient({ network: 'testnet' });

async function run() {
  // Create a new fundraising campaign
  const txId = await client.campaigns.create({ goal: 5000, token: 'STX' });
  console.log('Campaign creation pending:', txId);

  // Fund an existing campaign
  const fundTxId = await client.investors.fund('campaign-123', 100);
  console.log('Funding transaction pending:', fundTxId);
}
```

## 🧩 Architecture

The SDK is divided into modular domains to keep the API surface clean and predictable:

- `client.campaigns` — Methods for creating, listing, and querying campaign states.
- `client.investors` — Methods for depositing funds and tracking wallet investments.
