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
		
		this.bot.on('start', () => {
			this.bot.postMessageToUser('john', 'test message');
		})
	}
}

module.exports = Raiku;