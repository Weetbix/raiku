'use strict';

var Slackbots = require("slackbots");
var Haikufy = require('haikufy');
var _ = require('lodash');

class Raiku {
	constructor(settings){
		this.settings = settings;
		this.settings.name = this.settings.name || "Raiku";
		this.haikufy = new Haikufy();
	}
	
	run(){
		this.bot = new Slackbots(this.settings);
		this.bot.on('message', (message) => this.respondToHaikus(message));
	}
	
	respondToHaikus(message){
		if(isChatMessage(message) &&
		   !isBotMessage(message))
		{
			let haiku = this.haikufy.find(message.text);
			if(haiku){
				userFromID(this.bot, message.user)
				.then(user => {
					this.bot.postMessage(message.channel, 
										 haiku.join('\n'),
										 { icon_url: user.profile.image_32,
											username: usernameToArtistName(user.name) });
				})
				.fail(err => {
					console.error("Couldn't respond with a haiku: " + err.message);
				});
			}
		}
	}
}
module.exports = Raiku;

function isChatMessage(message){
	return message.type === 'message' && Boolean(message.text);	
}

function isBotMessage(message){
    return message.subtype === "bot_message";
}

function usernameToArtistName(username){
	return _.sample([
		`The artist formerly known as ${username}`,
		`${username}son`,
		`The great ${username}`,
		`${username} Allan Poe`,
		`${username} Shakespeare`,
		`${username} Wordsmith`,
		`${username} E. Cummings`
	]);
}

function userFromID(bot, id){
	return bot
		.getUsers()
		.then(users => {
			return _.find(users.members, { id: id } )
		});
}