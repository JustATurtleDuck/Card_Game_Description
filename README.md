# Card Game Description Microservice

This microservice provides descriptions for various card games. Users can request descriptions for specific card games and check if a particular card game exists in the database.

## Communication Contract
### Requesting Data

To request data from the microservice, send an HTTP GET request to the appropriate endpoint:

- Get Description: GET /get-description?game=<game_name>
  - Replace <game_name> with the name of the card game you want the description for (games with two or more words have an underscore rather than spaces. For example: "gin rummy" is "gin_rummy").  
  - Example call: GET /get-description?game=poker
- Check Existence: GET /check-existence?game=<game_name>
  - Replace <game_name> with the name of the card game you want to check existence for.
  - Example call: GET /check-existence?game=cribbage

### Receiving Data
The microservice will respond with the requested data in plain text format.

### Sequence Digram:
![assignment8_UML](https://github.com/JustATurtleDuck/Card_Game_Description/assets/72314242/5d158e92-74f0-4ee1-90eb-7a14a402211e)



