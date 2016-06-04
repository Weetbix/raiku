'use strict';

var Raiku = require('../lib/raiku');

if(process.env.BOT_API_KEY == null)
	throw new Error("BOT_API_KEY not set");

var token = process.env.BOT_API_KEY.trim();
var name = process.env.BOT_NAME;

var raiku = new Raiku({
	token: token,
	name: name
});

raiku.run();