import axios from 'axios';
import niceList from '../utils/niceList.json';
import MerkleTree from '../utils/MerkleTree';

const serverUrl = document.location.origin;

async function main() {
    // Check the name provided by the user
    const inputName = document.getElementById('name-input').value;
    // Send the request for the name
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
        body: { name: inputName }, // Name from the input
    });
    // Display the result from the request in the frontend
    console.log({ gift });
    const name = document.getElementById('name');
    name.classList.remove('hidden');
    name.textContent = gift;
}

document.getElementById('check').addEventListener('click', main);
