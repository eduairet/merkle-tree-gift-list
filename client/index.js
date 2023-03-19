import axios from 'axios';
import niceList from '../utils/niceList.json';
import MerkleTree from '../utils/MerkleTree';

const serverUrl = process.env.APP_URL;

async function main() {
    // TODO: how do we prove to the server we're on the nice list?

    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
        // TODO: add request body parameters here!
    });

    console.log({ gift });
    document.getElementById('name').textContent = gift;
}

document.getElementById('check').addEventListener('click', main);
