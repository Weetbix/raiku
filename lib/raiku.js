'use strict';

var util = require("util");
var Slackbots = require("slackbots");
var Q = require("q");

class Raiku {
	constructor(settings){
		this.settings = settings;
		this.settings.name = this.settings.name || "Raiku";
	}
	
	run(){
		this.bot = new Slackbots(this.settings);
		this.bot.on('message', (message) => respondToHaikus(this.bot, message));
	}
}
module.exports = Raiku;

function respondToHaikus(bot, message){
	if(isChatMessage(message) &&
	   !isBotMessage(message))
	{
		bot.postMessageToUser('john', h.hyphenateText(message.text).replace(/\u00AD/g, '-'));
	}
}

function isChatMessage(message){
	return message.type === 'message' && Boolean(message.text);	
}

function isBotMessage(message){
    return message.subtype === "bot_message";
}