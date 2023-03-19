# Merkle Gift List

Alchemy University Ethereum Bootcamp - [Week 2 exercise](https://github.com/ChainShot/GiftList) by Eduardo Aire

## Live Demo

[merkle-tree-gift-list.vercel.app/](https://merkle-tree-gift-list.vercel.app/)

## Local

### Installation and run

-   Clone the repository
-   Install dependencies `npm install`
-   Run the server `npm run dev`
-   Open [localhost:1225](http://localhost:1225)

## Description

### Client

-   You can test the client from the frontend:
    -   Type a name inside the `input` field
        -   Valid names are in [`niceList.json`](./utils/niceList.json)
    -   Click the `CHECK` button
-   A message will appear right bellow the button telling if the name deserves a gift
-   Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server

## Server

-   An express server which will respond to the client's request
-   Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift!

## Utils

-   [`niceList.json`](./utils/niceList.json) - contains all the names of the people who deserve a gift this year
-   [`example.js`](./utils/example.js) - shows how we can generate a root, generate a proof and verify that some value is in the root using the proof
-   [`MerkleTree.js`](./utils/MerkleTree.js) - it should look familiar from the Merkle Tree module! This one has been modified so you should not have to deal with any crypto type conversion
-   [`verifyProof.js`](./utils/verifyProof.js) - it should also look familiar. This was the last stage in the module. You can use this function to prove a name is in the Merkle root
