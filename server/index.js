const express = require('express');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const verifyProof = require('../utils/verifyProof');

const port = 1225;
const parent = require('path').resolve(__dirname, '..');

const app = express();
app.use(express.json());

// Frontend
app.use(express.static(parent + '/client'));

// Create a merkle tree from the nice list
const merkleTree = new MerkleTree(niceList);
const names = niceList;
// And get the merkle root from it
const MERKLE_ROOT = merkleTree.getRoot();

app.post('/gift', (req, res) => {
    // Get the input name from the front-end in the request's body
    const {
        body: { name },
    } = req.body;
    // Check if the name is in the list
    const proof = merkleTree.getProof(names.indexOf(name));
    const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
    if (isInTheList) {
        res.send('You got a toy robot!');
    } else {
        res.send('You are not on the list :(');
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
