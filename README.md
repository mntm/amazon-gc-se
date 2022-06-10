
# Amazon-GC
> API client for using [Amazon Incentives API](https://developer.amazon.com/apps-and-games/incentives-api)
to [create gift cards on demand](http://s3.amazonaws.com/AGCOD/tech_spec/AGCODTechSpec_WC_Simplified_EN.pdf).

A fork of @john9hoff's [amazon-gc](https://github.com/john9hoff/amazon-gc/releases/tag/v1.0.5).


## Install
```
npm install --save amazon-gc-se
```

## Usage
#### Create a gift card
```js
const { createGiftCard } = require('amazon-gc-se')

const request = {
    amount: 20,
    currencyCode: 'USD',
    partnerId: 'yourPartnerId',
    accessKey: 'yourAccessKey',
    secretKey: 'yourSecretKey',
    environment: 'sandbox',
    endpoint: 'NA',
}

async function runSample() {
    const res = await createGiftCard(request);
    console.log(`Amazon gift card is ${JSON.stringify(res)}`)
}

runSample().catch(console.error)

```
#### Regenerate gift card
```js
const { createGiftCard } = require('amazon-gc-se')

const request = {
    amount: 20,
    currencyCode: 'USD',
    partnerId: 'yourPartnerId',
    accessKey: 'yourAccessKey',
    secretKey: 'yourSecretKey',
    environment: 'sandbox',
    endpoint: 'NA',
    creationRequestId: 'previouslyGeneratedCreationRequestId',
}

async function runSample() {
    const res = await createGiftCard(request);
    console.log(`Amazon gift card is ${JSON.stringify(res)}`)
}

runSample().catch(console.error)

```

## Changes
- Added type declaration
- Removed unused dependencies
- Updated every dependencies
- Replaced [@dylang/shortid](https://www.npmjs.com/package/shortid) with [@ai/nanoid](https://www.npmjs.com/package/nanoid)
- Regenerate coupons by passing creationRequestId to createGiftCard

## Other clients
- https://www.npmjs.com/package/agcod

## Problems
* If you find an issue or bug, please [file it on GitHub](https://github.com/mntm/amazon-gc-se/issues).

