const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const CARD_GAME_DIRECTORY = './card_games';

// Create the server
const server = http.createServer((req, res) => {
    const { method, url } = req;

    // Handle GET requests
    if (method === 'GET') {
        if (url === '/') {
            // Display the available endpoints
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the Card Game Microservice. Available endpoints:\n/get-description?game=<game_name>\n/check-existence?game=<game_name>');
        }

        // Get the description of a card game
        else if (url.startsWith('/get-description')) {
            const gameName = url.split('=')[1];
            const filePath = path.join(CARD_GAME_DIRECTORY, `${gameName}.txt`);
            
            // Read the description from the file
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Card game not found');
                } 
                // Send the description as the response
                else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(data);
                }
            });
        } 

        // Check if the card game exists
        else if (url.startsWith('/check-existence')) {
            const gameName = url.split('=')[1];
            const filePath = path.join(CARD_GAME_DIRECTORY, `${gameName}.txt`);
            
            // Check if the file exists
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Card game does not exist');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Card game exists');
                }
            });
        }

        // Invalid endpoint
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Invalid endpoint');
        }
    } 
    // Method not allowed
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
