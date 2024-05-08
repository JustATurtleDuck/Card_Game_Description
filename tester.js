const http = require('http');

const PORT = 3000;

// Function to test the /get-description endpoint
function testGetDescription(gameName) {
    const url = `http://localhost:${PORT}/get-description?game=${gameName}`;

    http.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(`Description of ${gameName}: ${data}`);
        });
    }).on('error', (err) => {
        console.error(`Error retrieving description for ${gameName}: ${err.message}`);
    });
}

// Function to test the /check-existence endpoint
function testCheckExistence(gameName) {
    const url = `http://localhost:${PORT}/check-existence?game=${gameName}`;

    http.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(`Existence of ${gameName}: ${data}`);
        });
    }).on('error', (err) => {
        console.error(`Error checking existence for ${gameName}: ${err.message}`);
    });
}

// Test cases
const cardGames = ['poker', 'cribbage', 'blackjack', 'gin_rummy', 'hearts', 'spades'];

for (const game of cardGames) {
    testGetDescription(game);
    testCheckExistence(game);
}
