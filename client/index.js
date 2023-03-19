import axios from 'axios';

const serverUrl = document.location.origin;

const getResult = (id, content) => {
    const el = document.getElementById(id);
    el.classList.remove('hidden');
    el.textContent = content;
};

async function main() {
    // Check the name provided by the user
    const inputName = document.getElementById('name-input').value;
    // Send the request for the name
    try {
        const { data: gift } = await axios.post(`${serverUrl}/gift`, {
            body: { name: inputName }, // Name from the input
        });
        // Display the result from the request in the frontend
        console.log({ gift });
        getResult('name', gift);
        getResult('gift', gift === 'You are not on the list :(' ? '😭' : '🤖');
    } catch (err) {
        alert(err);
    }
}

document.getElementById('check').addEventListener('click', main);
