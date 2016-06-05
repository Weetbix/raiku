# Raiku
Spots and posts hidden haikus in your slack channels.

Raiku will listen to any messages in it's invited channels, and repost them in haiku form if they are hidden haikus. 

# Running the bot

## Run on Heroku for free
You can immediately deploy and start using the bot by clicking the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Weetbix/raiku/tree/deploy)

You will need to enter your slack bot API key, and it will begin running on a free heroku instance.

## Downloading
You can download the package from npm with:
```
npm install raiku
```

## Environment Variables

Raiku requires the following environment variables:

Variable|Description
----|-----
`BOT_API_KEY`|The slack bot API key, for the bot user you want to run raiku
`BOT_NAME`| Optional name of your slack bot

## Running Locally
You can test or run Raiku locally with `npm start` or `node bin/run.js`

You will still need to setup the environment variables described above.