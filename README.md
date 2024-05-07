**Card Game Description Microservice**
This microservice provides descriptions for various card games. Users can request descriptions for specific card games and check if a particular card game exists in the database.

**Communication Contract**
Requesting Data
To request data from the microservice, send an HTTP GET request to the appropriate endpoint:

Get Description: GET /get-description?game=<game_name>
Replace <game_name> with the name of the card game you want the description for.
Example call: GET /get-description?game=poker
Check Existence: GET /check-existence?game=<game_name>
Replace <game_name> with the name of the card game you want to check existence for.
Example call: GET /check-existence?game=cribbage
Receiving Data
The microservice will respond with the requested data in plain text format.
