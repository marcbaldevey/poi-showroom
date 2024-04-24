# Project Name

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

or if you are using yarn:

```bash
yarn install
```

or if you are using pnpm:

```bash
pnpm install
```

## Using the API

To use the API, you first need to obtain a token. Follow these steps to generate a new token:

1. Log in to your POI account.
2. Navigate to Settings.
3. Click on API Tokens.
4. Click on Generate New Token.

This will provide you with a token.

After obtaining the token, you need to add it to your `.env` and `.env.development` files. Replace `VITE_POI_TOKEN` with the token you received:

```properties
VITE_POI_URL = https://w2pcommunity.tpv7q9c17jna6.eu-west-3.cs.amazonlightsail.com/api
VITE_POI_FRONTEND_URL = https://w2pcommunity.tpv7q9c17jna6.eu-west-3.cs.amazonlightsail.com
VITE_POI_TOKEN=yourtoken
```
